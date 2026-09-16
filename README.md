# Star Studio's

Sitio web de Star Studio's para presentar servicios de ingeniería digital, productos visuales y un formulario de contacto conectado a Discord.

## Estructura MVC

```text
starstudio/
├── app.py                         # Entrada y fábrica de Flask
├── controllers/                   # Rutas HTTP y coordinación de casos de uso
│   ├── main_controller.py         # Renderiza la vista principal
│   └── contact_controller.py      # API del formulario de contacto
├── models/                        # Datos y reglas de validación
│   └── contact.py                 # Modelo ContactRequest
├── services/                      # Integraciones externas
│   └── discord_webhook.py         # Envío de embeds a Discord
├── templates/                     # Vistas HTML/Jinja
│   └── index.html
├── static/
│   ├── css/style.css              # Apariencia y responsive
│   ├── js/app.js                  # Interacciones del navegador e idiomas
│   └── images/                    # Logos, productos y reseñas
├── .env.example                   # Plantilla de configuración local
└── requirements.txt
```

La vista mantiene el contenido de la página, `style.css` controla la presentación y `app.js` controla tema, idiomas, navegación, animaciones y formulario. El backend se divide entre controladores, modelo de contacto y servicio de Discord para que cada responsabilidad tenga un lugar claro.

## Ejecutar en local

1. Instala las dependencias: `pip install -r requirements.txt`.
2. Opcionalmente copia `.env.example` como `.env` y configura `DISCORD_WEBHOOK_URL`.
3. Inicia el servidor: `python app.py`.
4. Abre [http://127.0.0.1:5000](http://127.0.0.1:5000).

El formulario espera un nombre, un número de teléfono y un mensaje. La API está disponible en `POST /api/contact`.
