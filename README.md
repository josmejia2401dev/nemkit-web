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
- `src/app/app.component.html`: hero, catálogo, secciones de Inventory y teaser
  de Notify.
- `src/styles.css`: sistema visual (petróleo/jade/niebla) y estilos de productos.
- `src/index.html`: SEO, Open Graph y JSON-LD de la plataforma.
- `public/`: favicon, imagen OG, robots y sitemap.

## Identidad

- **Paleta**: petróleo `#15332D`, jade `#5F8478`, niebla `#F4F6F5`,
  superficie `#E9EEEA`, borde `#DDE3DF` y tinta `#111A17`. La app de Inventory
  conserva su propio verde; Nemkit se distingue por el fondo frío y el acento jade.
- **Marca**: mangle (árbol con raíces aéreas) dibujado en SVG. Vive en
  `public/favicon.svg`, en el header/footer de `app.component.html` y en
  `public/og-image.svg` (fuente vectorial de `og-image.png`).

Cuando Notify se despliegue, cambia su `status` a `available` en
`app.component.ts`; la tarjeta pasará a enlazar `notifyLandingUrl`.
