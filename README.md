# nemkit-web

Portal público de **Nemkit** para presentar los dos productos comerciales:

| Producto | App | Estado |
|---|---|---|
| Nemkit Inventory | `https://neminv-app.netlify.app` | Disponible |
| Nemkit Restaurant | `https://nemres.netlify.app` | Disponible |
| Nemkit (este portal) | `https://nemkit.pages.dev` | — |

Notify no forma parte de este portal: es un producto privado e interno.

## Desarrollo

```bash
npm install
npm start -- --port 4400
```

Abre `http://localhost:4400`.

URLs de producto en `src/environments/environment.ts`:

- `inventoryAppUrl` → `http://localhost:4200`.
- `restaurantAppUrl` → `http://localhost:4201`.

Producción:

- Inventory: `https://neminv-app.netlify.app`.
- Restaurant: `https://nemres.netlify.app`.

## Rutas

```text
/           Portal: Inventory + Restaurant
/inventory  Landing de Nemkit Inventory
/restaurant Landing de Nemkit Restaurant
```

## Build y despliegue

```bash
npm run build
```

Salida en `dist/nemkit-web/browser`.

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist/nemkit-web/browser`
- SPA fallback: `public/_redirects` con `/* /index.html 200`

Cloudflare no lee `netlify.toml`; por eso el fallback vive en `public/_redirects`
y se copia al directorio de salida. Si la raíz `/` también devuelve 404, revisa
que el output directory sea exactamente `dist/nemkit-web/browser`.

Netlify sigue funcionando con `netlify.toml` mientras se completa la migración.

## Estructura

- `src/app/app.routes.ts`: rutas del portal.
- `src/app/content/products.ts`: contenido de Inventory y Restaurant.
- `src/app/pages/`: home, Inventory y Restaurant.
- `src/app/shared/`: header, footer, tarjetas, visuales y página de producto.
- `src/styles.css`: sistema visual y estilos del portal.
- `src/index.html`: SEO, Open Graph y JSON-LD de Inventory y Restaurant.
- `public/`: favicon, OG, robots y sitemap.

## Identidad

- Base oscura: `#070A08`, paneles `#0D1310`, bordes `#1E2A24`,
  textos `#F3F6F4` / `#A6B3AB`.
- Inventory: verde petróleo `#276650` y acento `#5FA98C`.
- Restaurant: ámbar/terracota `#B5653A` y acento `#E0A458`.
- Tipografía: Space Grotesk, Inter y JetBrains Mono.
- Stack: Angular 19 standalone, TailwindCSS 4 y PrimeNG 19.
