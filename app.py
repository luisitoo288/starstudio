"""
Star Studio's — Flask Backend
Gestiona el formulario de contacto y envía Discord Embeds vía Webhook.
"""

import os
from datetime import datetime, timezone

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, render_template, request

load_dotenv()

app = Flask(__name__)

# ── Configuración ─────────────────────────────────────────────────────────────
DEFAULT_WEBHOOK_URL = "https://discord.com/api/webhooks/1543410020148977674/gtl2mCLQwXuBjGucr4MNAevaikWKndJRxKKwu9nnECGLxR0Vexb0sRhZ46ZrlaZg0AwJ"
DISCORD_WEBHOOK_URL: str = os.getenv("DISCORD_WEBHOOK_URL") or DEFAULT_WEBHOOK_URL


import sqlite3
import hashlib

DB_PATH = os.path.join(os.path.dirname(__file__), "likes.db")

def init_db():
    """Inicializa la base de datos SQLite para la persistencia de likes acumulados."""
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS likes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_identifier TEXT UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        cursor.execute("SELECT COUNT(*) FROM likes")
        count = cursor.fetchone()[0]
        if count == 0:
            # Sembrar 124 likes iniciales de la comunidad
            for i in range(124):
                cursor.execute("INSERT OR IGNORE INTO likes (client_identifier) VALUES (?)", (f"seed_user_{i}",))
        conn.commit()

init_db()

def get_client_identifier():
    """Obtiene una clave única por persona (IP + User-Agent / Cookie)."""
    ip = request.headers.get("X-Forwarded-For", request.remote_addr or "127.0.0.1").split(",")[0].strip()
    user_agent = request.headers.get("User-Agent", "unknown")
    client_id = request.cookies.get("ss_client_id")
    if not client_id:
        client_id = hashlib.sha256(f"{ip}:{user_agent}".encode("utf-8")).hexdigest()[:32]
    return client_id

# ── Rutas ─────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    """Sirve la página principal."""
    return render_template("index.html")


@app.route("/api/likes", methods=["GET"])
def get_likes():
    """Obtiene el contador total acumulado de likes y si la persona actual ya dio su like."""
    client_id = get_client_identifier()
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM likes")
        count = cursor.fetchone()[0]

        cursor.execute("SELECT 1 FROM likes WHERE client_identifier = ?", (client_id,))
        liked = cursor.fetchone() is not None

    response = jsonify({"success": True, "count": count, "liked": liked})
    response.set_cookie("ss_client_id", client_id, max_age=315360000, samesite="Lax")
    return response


@app.route("/api/likes", methods=["POST"])
def toggle_like():
    """Alterna el like de 1 persona (1 persona = 1 solo like)."""
    client_id = get_client_identifier()
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT 1 FROM likes WHERE client_identifier = ?", (client_id,))
        already_liked = cursor.fetchone() is not None

        if already_liked:
            cursor.execute("DELETE FROM likes WHERE client_identifier = ?", (client_id,))
            new_liked = False
        else:
            cursor.execute("INSERT OR IGNORE INTO likes (client_identifier) VALUES (?)", (client_id,))
            new_liked = True

        conn.commit()

        cursor.execute("SELECT COUNT(*) FROM likes")
        new_count = cursor.fetchone()[0]

    response = jsonify({"success": True, "liked": new_liked, "count": new_count})
    response.set_cookie("ss_client_id", client_id, max_age=315360000, samesite="Lax")
    return response


@app.route("/api/contact", methods=["POST"])
def contact():
    """
    Recibe datos del formulario de contacto, valida los campos requeridos
    y despacha un Discord Embed estructurado al canal configurado.
    """
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"success": False, "error": "invalid_payload"}), 400

    name: str = data.get("name", "").strip()
    phone_number: str = (data.get("phone_number") or data.get("phone") or data.get("discord") or "").strip()
    message: str = data.get("message", "").strip()

    # ── Validación ────────────────────────────────────────────────────────────
    if not all([name, phone_number, message]):
        return jsonify({"success": False, "error": "missing_fields"}), 400

    # Limitar longitud para evitar abuso
    if len(name) > 120 or len(phone_number) > 120 or len(message) > 2000:
        return jsonify({"success": False, "error": "fields_too_long"}), 400

    webhook_url = os.getenv("DISCORD_WEBHOOK_URL") or DEFAULT_WEBHOOK_URL
    if not webhook_url:
        app.logger.warning("DISCORD_WEBHOOK_URL no configurado.")
        return jsonify({"success": False, "error": "webhook_not_configured"}), 500

    # Truncar mensaje a 1000 caracteres para el valor del field de Discord (límite máximo de Discord: 1024)
    display_message = message[:1000] if len(message) > 1000 else message

    # ── Discord Embed ─────────────────────────────────────────────────────────
    embed = {
        "title": "✦ NUEVA SOLICITUD DE PROYECTO — STAR STUDIO'S",
        "description": "Se ha recibido un nuevo ticket desde el formulario del sitio web oficial.",
        "color": 0x5865F2,  # Discord Blurple Premium
        "fields": [
            {
                "name": "👤 Cliente / Nombre",
                "value": f"```{name}```",
                "inline": True,
            },
            {
                "name": "📱 Número de Teléfono",
                "value": f"```{phone_number}```",
                "inline": True,
            },
            {
                "name": "📋 Detalle de la Solicitud / Consulta",
                "value": f"```{display_message}```",
                "inline": False,
            },
        ],
        "footer": {
            "text": "Star Studio's · Sistema de Tickets & Gestión",
        },
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

    payload = {
        "username": "Star Studio's Tickets",
        "embeds": [embed],
    }

    # ── Envío al Webhook ──────────────────────────────────────────────────────
    try:
        response = requests.post(
            webhook_url,
            json=payload,
            timeout=10,
        )
        if response.status_code in (200, 204):
            return jsonify({"success": True})
        else:
            app.logger.error(
                "Discord webhook devolvió %s: %s",
                response.status_code,
                response.text,
            )
            return jsonify({"success": False, "error": "webhook_failed"}), 502
    except requests.Timeout:
        return jsonify({"success": False, "error": "timeout"}), 504
    except requests.RequestException as exc:
        app.logger.exception("Error al contactar Discord webhook: %s", exc)
        return jsonify({"success": False, "error": "request_error"}), 500


# ── Entry Point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    app.run(debug=True, port=5000)
