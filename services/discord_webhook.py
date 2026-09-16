"""Integración con el webhook de Discord."""

from datetime import datetime, timezone

import requests

from models.contact import ContactRequest


class DiscordWebhookService:
    """Construye y envía los embeds del formulario de contacto."""

    default_url = (
        "https://discord.com/api/webhooks/1543410020148977674/"
        "gtl2mCLQwXuBjGucr4MNAevaikWKndJRxKKwu9nnECGLxR0Vexb0sRhZ46ZrlaZg0AwJ"
    )

    def send(self, contact_request: ContactRequest, webhook_url: str) -> requests.Response:
        """Envía una solicitud de contacto al canal de Discord."""
        display_message = contact_request.message[:1000]
        embed = {
            "title": "✦ NUEVA SOLICITUD DE PROYECTO — STAR STUDIO'S",
            "description": "Se ha recibido un nuevo ticket desde el formulario del sitio web oficial.",
            "color": 0x5865F2,
            "fields": [
                {
                    "name": "👤 Cliente / Nombre",
                    "value": f"```{contact_request.name}```",
                    "inline": True,
                },
                {
                    "name": "📱 Número de Teléfono",
                    "value": f"```{contact_request.phone_number}```",
                    "inline": True,
                },
                {
                    "name": "📋 Detalle de la Solicitud / Consulta",
                    "value": f"```{display_message}```",
                    "inline": False,
                },
            ],
            "footer": {"text": "Star Studio's · Sistema de Tickets & Gestión"},
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        payload = {"username": "Star Studio's Tickets", "embeds": [embed]}
        return requests.post(webhook_url, json=payload, timeout=10)
