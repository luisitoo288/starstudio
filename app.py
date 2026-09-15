"""Punto de entrada de Star Studio's.

La aplicación sigue una MVC ligera: controladores para las rutas, modelos para
validar datos y servicios para las integraciones externas.
"""

from flask import Flask
from dotenv import load_dotenv

from controllers.contact_controller import contact_bp
from controllers.main_controller import main_bp

load_dotenv()


def create_app() -> Flask:
    """Crea y configura la aplicación Flask."""
    application = Flask(__name__)
    application.register_blueprint(main_bp)
    application.register_blueprint(contact_bp)
    return application


app = create_app()


if __name__ == "__main__":
    app.run(debug=True, port=5000)
