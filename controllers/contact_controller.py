"""Controlador del formulario de contacto."""

import os

import requests
from flask import Blueprint, current_app, jsonify, request

from models.contact import ContactRequest
from services.discord_webhook import DiscordWebhookService


contact_bp = Blueprint("contact", __name__)
webhook_service = DiscordWebhookService()


@contact_bp.post("/api/contact")
def contact():
    """Valida una solicitud y la envía al webhook configurado."""
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"success": False, "error": "invalid_payload"}), 400

    contact_request = ContactRequest.from_payload(data)
    validation_error = contact_request.validation_error()
    if validation_error:
        return jsonify({"success": False, "error": validation_error}), 400

    webhook_url = os.getenv("DISCORD_WEBHOOK_URL") or webhook_service.default_url
    if not webhook_url:
        current_app.logger.warning("DISCORD_WEBHOOK_URL no configurado.")
        return jsonify({"success": False, "error": "webhook_not_configured"}), 500

    try:
        response = webhook_service.send(contact_request, webhook_url)
        if response.status_code in (200, 204):
            return jsonify({"success": True})

        current_app.logger.error(
            "Discord webhook devolvió %s: %s",
            response.status_code,
            response.text,
        )
        return jsonify({"success": False, "error": "webhook_failed"}), 502
    except requests.Timeout:
        return jsonify({"success": False, "error": "timeout"}), 504
    except requests.RequestException as exc:
        current_app.logger.exception("Error al contactar Discord webhook: %s", exc)
        return jsonify({"success": False, "error": "request_error"}), 500
