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
- `src/styles.css`: sistema visual (verde/crema) y estilos de productos.
- `src/index.html`: SEO, Open Graph y JSON-LD de la plataforma.
- `public/`: favicon, imagen OG, robots y sitemap.

Cuando Notify se despliegue, cambia su `status` a `available` en
`app.component.ts`; la tarjeta pasará a enlazar `notifyLandingUrl`.
