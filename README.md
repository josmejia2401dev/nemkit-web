# nemkit-web

Sitio principal de **Nemkit**: presenta los productos de la plataforma y deriva a
cada uno.

| Producto | Sitio | Estado |
|---|---|---|
| Nemkit Inventory | `https://neminv.netlify.app` | Disponible |
| Nemkit Inventory (app) | `https://neminv-app.netlify.app` | Disponible |
| Nemkit Notify | `https://nemnot.netlify.app` | Próximamente |
| Nemkit (este sitio) | `https://nemkit.netlify.app` | — |

## Desarrollo

```bash
npm install
npm start -- --port 4400
```

Abre `http://localhost:4400`. Las URLs de los productos viven en
`src/environments/environment.ts`:

- `inventoryLandingUrl` → `http://localhost:4400` en local (o el puerto donde
  corras la landing de inventario).
- `inventoryAppUrl` → `http://localhost:4200` (app de inventario).
- `notifyLandingUrl` → `http://localhost:4401` cuando exista la landing de
  notificaciones.

## Build y despliegue

```bash
npm run build
```

Salida en `dist/nemkit-web/browser`. Netlify usa `netlify.toml`
(`publish = "dist/nemkit-web/browser"`).

## Estructura

- `src/app/app.component.ts`: datos de los productos y URLs de acceso.
- `src/app/app.config.ts`: preset de PrimeNG (Aura + neón) y modo oscuro.
- `src/app/app.component.html`: hero, catálogo, secciones de Inventory y teaser
  de Notify.
- `src/styles.css`: sistema visual (negro técnico + verde neón) y estilos de productos.
- `src/index.html`: SEO, Open Graph y JSON-LD de la plataforma.
- `public/`: favicon, imagen OG, robots y sitemap.

## Identidad

- **Paleta**: negro técnico `#070A08`, panel `#0D1310`, borde `#1E2A24`,
  texto `#F3F6F4`, verde neón `#39FF14` y acento profundo `#2ECC11`. La app de
  Inventory conserva su propio verde; Nemkit se distingue por el fondo oscuro,
  la retícula y el acento neón.
- **Tipografía**: Space Grotesk para titulares, Inter para lectura y
  JetBrains Mono para etiquetas y datos.
- **Stack visual**: Angular 19 standalone, TailwindCSS 4 (PostCSS) y PrimeNG 19
  (Aura con preset neón) para botones y etiquetas.
- **Marca**: mangle (árbol con raíces aéreas) dibujado en SVG. Vive en
  `public/favicon.svg`, en el header/footer de `app.component.html` y en
  `public/og-image.svg` (fuente vectorial de `og-image.png`).

Cuando Notify se despliegue, cambia su `status` a `available` en
`app.component.ts`; la tarjeta pasará a enlazar `notifyLandingUrl`.
