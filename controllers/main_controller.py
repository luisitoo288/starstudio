"""Rutas de navegación y renderizado de vistas."""

from flask import Blueprint, render_template


main_bp = Blueprint("main", __name__)


@main_bp.get("/")
def index():
    """Sirve la vista principal del estudio."""
    return render_template("index.html")
