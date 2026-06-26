# Rodrigo J. García Pinto — Sitio Web Profesional

Sitio web del **Productor Asesor de Seguros Rodrigo J. García Pinto** (Matrícula SSN #87740), radicado en Tucumán, Argentina. Construido con Next.js 14 y React 18.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router) + TypeScript
- **UI:** Bootstrap + FontAwesome + WOW.js (animaciones)
- **Sliders:** Revolution Slider + OWL Carousel + Embla Carousel
- **Portafolio:** CubePortfolio + FancyBox
- **Formularios:** Validación cliente/servidor con Zod
- **Email:** Resend API
- **Analytics:** Google Analytics (UA-160318198-1)

## Funcionalidades

- Hero slider animado (Revolution Slider)
- Formulario de cotización en 3 modalidades: **Vehículos**, **Hogar** y **Accidentes Personales**
- Formulario de contacto con envío de email
- Portafolio de productos filtrables (12 tipos de seguros)
- Carrusel de aseguradoras: SURA, MAPFRE, Zurich, Galeno, Asociart, Federación Patronal, Mercantil Andina
- Diseño responsive (mobile-first)
- SEO: Open Graph, Twitter Cards, sitemap.xml, robots.txt

## Estructura del Proyecto

```
app/
├── api/
│   ├── contacto/enviar/route.ts    # Endpoint formulario de contacto
│   └── cotizacion/enviar/route.ts  # Endpoint formulario de cotización
├── layout.tsx                       # Layout raíz con scripts y SEO
└── page.tsx                         # Página principal (landing)

components/
├── ContactForm.tsx                  # Formulario de contacto
├── HeroSlider.tsx                   # Slider principal (no-SSR)
├── Portfolio.tsx                    # Galería de productos (no-SSR)
├── QuotationForm.tsx                # Formulario de cotización con tabs
└── ScrollAnimations.tsx             # Inicialización de WOW.js

lib/
├── constants.ts                     # Datos de contacto y configuración
├── email.ts                         # Utilidad de envío con Resend
└── validators.ts                    # Esquemas Zod para validación
```

## Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@segurosgarciapinto.com.ar
FROM_EMAIL=noreply@segurosgarciapinto.com.ar
```

## Desarrollo Local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts Disponibles

| Comando         | Descripción                        |
|-----------------|------------------------------------|
| `npm run dev`   | Servidor de desarrollo             |
| `npm run build` | Build de producción                |
| `npm start`     | Servidor de producción             |
| `npm run lint`  | Análisis estático de código        |

## Notas de Arquitectura

- Los componentes que dependen de jQuery (`HeroSlider`, `Portfolio`) se cargan con `dynamic()` y `ssr: false` para evitar errores de hidratación.
- jQuery se carga con `strategy="beforeInteractive"` para garantizar disponibilidad antes de la hidratación de React.
- La validación de formularios es doble: cliente (React state) y servidor (Zod).

## Despliegue

Compatible con cualquier hosting que soporte Node.js. Para Vercel:

```bash
npm run build
```

Configurar las variables de entorno en el panel de Vercel antes del deploy.
