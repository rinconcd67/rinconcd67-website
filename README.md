# RINCONCD67 Consulting & Supply LLC — Sitio web corporativo v1

Sitio estático bilingüe (EN por defecto, ES con el botón del menú). Sin dependencias de build.

## Estructura
- `index.html` + 5 subpáginas (trading, supply-chain, ai-consulting, about, contact)
- `assets/css/style.css` — paleta de marca (cobre #AE6B47 / carbón #221E1A / marfil #F6F1E8)
- `assets/js/main.js` — selector de idioma persistente, menú móvil, animaciones
- `assets/img/` — logo procesado e imágenes recortadas (texto corrupto eliminado)

## Publicación en GitHub Pages
1. `gh repo create rinconcd67/rinconcd67-website --private --source . --push`
2. Settings → Pages → Deploy from branch → main / root
3. Verificar en https://rinconcd67.github.io/rinconcd67-website/

## Switch del dominio (solo cuando el sitio esté aprobado)
Ver RCD67-DNS-BACKUP-2026-07-04.md. En el panel DNS de Wix:
- Registros A (@) → 185.199.108.153 / .109.153 / .110.153 / .111.153
- CNAME www → rinconcd67.github.io
- Crear archivo `CNAME` en el repo con: www.rinconcd67-consulting-supply-llc.com
- NO tocar MX ni TXT/SPF (Google Workspace)

## Pendientes de validación (AF-2026-001)
- Cifras de la franja oscura: 30+ años / 14 países / 3 prácticas
- Formulario de contacto: hoy usa mailto; recomendado migrar a Formspree (gratis) para UX profesional
- Artículos de Insights marcados "Coming soon"
- Vectorización profesional del monograma RC (v1 usa el raster limpiado)
