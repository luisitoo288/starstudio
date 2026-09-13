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


# ── Rutas ─────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    """Sirve la página principal."""
    return render_template("index.html")


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
