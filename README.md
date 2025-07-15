# 📚 Comandos JavaScript — Guía Interactiva

Este proyecto es una **guía visual e interactiva** de los principales comandos, métodos y funciones en JavaScript. Está diseñado para ayudar a comprender la sintaxis, el propósito y la pronunciación de cada uno, además de brindar una descripción detallada y ejemplos auditivos mediante TTS (Text to Speech).

## 🚀 Tecnologías utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **SpeechSynthesis API** para la lectura en voz alta.
- **JSON** como fuente de datos dinámica.

## 📦 Estructura del Proyecto

/comandosJavaScript
│
├── index.html # Interfaz principal
├── script.js # Lógica JS para cargar y mostrar el contenido dinámico
├── frases.json # Archivo con los comandos y sus descripciones
├── manifest.json # (opcional para PWA)
└── sw.js # Service Worker para modo offline (opcional)



## 🗂 Contenido de frases.json
Cada objeto en el archivo JSON contiene:
- `english`: Nombre del comando o método en JavaScript.
- `spanish`: Descripción breve en español.
- `pronunciation`: Pronunciación en IPA.
- `description`: Explicación detallada del funcionamiento y uso.

## 🖥️ Cómo ejecutarlo
1. Clona el repositorio o descarga los archivos.
2. Abre **index.html** en tu navegador preferido.
3. El proyecto cargará el archivo `frases.json` desde GitHub Pages o localmente si lo adaptas.
4. Haz clic en el botón de audio 🔊 para escuchar la explicación del comando seleccionado.

### ✅ Recomendación
Para evitar problemas con **CORS o rutas relativas**, utiliza un servidor local como:
```bash
npx serve
