# Flujo TV Perú 🇵🇪

**La plataforma más completa de entretenimiento para Perú.**

Landing page premium optimizada para SEO, diseñada para posicionarse en búsquedas de streaming en Perú y Sudamérica.

## 🌟 Características

- **+5000 Canales en Vivo**: TV peruana e internacional en HD, FHD y 4K
- **Precios en Soles**: Desde S/. 34.99/mes
- **3 Pantallas Simultáneas**: Todos los planes incluyen lo mismo
- **Soporte 24/7**: WhatsApp: +51 914 326 729
- **Sin Contratos**: Cancela cuando quieras

## 💰 Planes

| Plan | Precio | Beneficio Extra |
|------|--------|-----------------|
| 1 Mes | S/. 34.99 | - |
| 3 Meses | S/. 99.99 | - |
| 6 Meses | S/. 179.99 | + 1 Mes GRATIS ⭐ |
| 12 Meses | S/. 339.99 | + 2 Meses GRATIS |

## 🎨 Stack Tecnológico

- **Framework**: Astro 4.x
- **Estilos**: TailwindCSS
- **Tipografía**: Inter + Montserrat
- **Colores**: Naranja (#FF6B00), Negro (#0a0a0a)

## 📱 SEO & Indexación

La landing incluye configuración completa para Google:

- `robots.txt` - Directivas para crawlers
- `sitemap.xml` - Mapa del sitio
- `manifest.json` - PWA config
- `browserconfig.xml` - Windows tiles
- Schema.org JSON-LD:
  - Organization
  - WebSite
  - Product (con ofertas)
  - LocalBusiness (geo: Lima, Perú)
  - BreadcrumbList

### Keywords Objetivo
- Flujo TV Perú
- IPTV Perú
- Streaming Perú
- Canales peruanos en vivo
- América TV, Latina, ATV en vivo
- Fútbol peruano, Liga 1
- Fire Stick Perú, TV Box Perú

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa
npm run preview
```

## 📂 Estructura

```
flujo-tv-peru/
├── public/
│   ├── logo_flujo.webp      # Favicon
│   ├── og-image.png         # Open Graph
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── browserconfig.xml
├── src/
│   ├── config/
│   │   └── site.ts          # Configuración SEO
│   ├── layouts/
│   │   └── Layout.astro     # Meta tags + Schema.org
│   ├── components/
│   │   ├── HeroEpic.astro
│   │   ├── BenefitsGolden.astro
│   │   ├── HowItWorks.astro
│   │   ├── PricingPremium.astro
│   │   ├── Download.astro
│   │   ├── FAQ.astro
│   │   └── Footer.astro
│   └── pages/
│       └── index.astro
└── README.md
```

## 🔧 Configuración

Edita `src/config/site.ts` para cambiar:
- Dominio canónico
- Número de WhatsApp
- Precios
- Keywords SEO

## 💬 Contacto

WhatsApp: [+51 914 326 729](https://wa.me/51914326729)

## 📄 Licencia

© 2026 Flujo TV Perú. Todos los derechos reservados.
