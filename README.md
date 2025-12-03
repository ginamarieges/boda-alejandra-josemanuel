# 💍 Boda de Alejandra & José Manuel — Página Web

Este repositorio contiene la página web oficial de la boda de Alejandra y José Manuel, desarrollada con Astro, TailwindCSS y TypeScript.
El sitio ofrece información esencial sobre el evento, detalles de viaje, agenda del día y un formulario de confirmación de asistencia.

## ✨ Secciones del Sitio

Home — Presentación, mensaje de bienvenida y cuenta regresiva.

Travel & Stay — Transporte, rutas, hoteles y recomendaciones.

Event — Información de la ceremonia, recepción y horarios.

RSVP — Formulario para confirmar asistencia.

FAQs — Respuestas a preguntas frecuentes de los invitados.

## 🛠️ Tecnologías Usadas

Astro — Framework moderno para sitios rápidos.

TailwindCSS — Framework de utilidades para estilizar.

TypeScript — Tipado estático para un desarrollo más robusto.

## 📂 Estructura del Proyecto

├── public/
│ ├── images/
│ └── favicon.ico
├── src/
│ ├── components/
│ ├── layouts/
│ ├── pages/
│ │ ├── index.astro # Home
│ │ ├── travel-stay.astro # Travel & Stay
│ │ ├── event.astro # Event
│ │ ├── rsvp.astro # RSVP
│ │ └── faqs.astro # FAQs
│ ├── styles/
│ └── utils/
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
└── README.md

## 🚀 Instalación y Ejecución

1. Instalar dependencias
   npm install

2. Ejecutar en modo desarrollo
   npm run dev

El sitio estará disponible en:
http://localhost:4321

3. Generar build de producción
   npm run build

## 📦 Despliegue en Netlify

Este proyecto está preparado para desplegarse en Netlify.

🛠️ Configuración recomendada en Netlify

Build command:

npm run build

Publish directory:

dist

Node version (opcional):
Configurar en Netlify > Site Settings > Build & Deploy > Environment

NODE_VERSION = 18

🚀 Desplegar

Haz push del proyecto a GitHub.

En Netlify, selecciona "Add new site" → "Import from Git".

Conecta el repositorio.

Verifica los parámetros de build.

Despliega.

Netlify generará una URL pública del sitio.

## 📝 Personalización

Puedes modificar:

Textos y fotos → src/pages/

Componentes → src/components/

Estilos globales → src/styles/

Tipado y helpers → src/utils/

## 🤍 Créditos

Sitio desarrollado con cariño para la boda de Alejandra & José Manuel.
Construido con Astro + TailwindCSS + TypeScript y desplegado en Netlify.
