"""Modelo de dominio para una solicitud de contacto."""

from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class ContactRequest:
    name: str
    phone_number: str
    message: str

    MAX_NAME_LENGTH = 120
    MAX_PHONE_LENGTH = 120
    MAX_MESSAGE_LENGTH = 2000

    @classmethod
    def from_payload(cls, payload: dict[str, Any]) -> "ContactRequest":
        """Normaliza las variantes de teléfono aceptadas por la API."""
        def clean(value: Any) -> str:
            return str(value or "").strip()

        return cls(
            name=clean(payload.get("name")),
            phone_number=clean(
                payload.get("phone_number")
                or payload.get("phone")
                or payload.get("discord")
            ),
            message=clean(payload.get("message")),
        )

    def validation_error(self) -> str | None:
        """Devuelve el código de error público de la primera validación fallida."""
        if not all((self.name, self.phone_number, self.message)):
            return "missing_fields"
        if (
            len(self.name) > self.MAX_NAME_LENGTH
            or len(self.phone_number) > self.MAX_PHONE_LENGTH
            or len(self.message) > self.MAX_MESSAGE_LENGTH
        ):
            return "fields_too_long"
        return None
