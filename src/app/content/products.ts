import { environment } from "../../environments/environment";

export type ProductId = "inventory" | "restaurant";

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface FlowStep {
  index: string;
  title: string;
  description: string;
}

export interface ProductRole {
  name: string;
  description: string;
}

export interface ProductScreenshot {
  kind: "dashboard" | "pos" | "layaways" | "deliveries" | "kitchen" | "tables" | "order";
  title: string;
  caption: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductContent {
  id: ProductId;
  name: string;
  slug: string;
  eyebrow: string;
  tagline: string;
  description: string;
  accent: "inventory" | "restaurant";
  appUrl: string;
  loginUrl: string;
  registerUrl: string;
  heroBullets: string[];
  audience: string[];
  features: ProductFeature[];
  flow: FlowStep[];
  roles: ProductRole[];
  screenshots: ProductScreenshot[];
  plan: {
    name: string;
    price: string;
    limits: string[];
    note: string;
  };
  faq: ProductFaq[];
}

const trim = (url: string): string => url.replace(/\/$/, "");

const inventoryApp = trim(environment.inventoryAppUrl);
const restaurantApp = trim(environment.restaurantAppUrl);

export const INVENTORY: ProductContent = {
  id: "inventory",
  name: "Nemkit Inventory",
  slug: "inventory",
  eyebrow: "RETAIL · DISPONIBLE",
  tagline: "Vende simple. Controla todo.",
  description:
    "La tienda que necesitas: productos, stock, compras, caja, domicilios y plan separe sin preparación de pedidos. El cliente elige, el vendedor asesora y la caja cobra.",
  accent: "inventory",
  appUrl: inventoryApp,
  loginUrl: `${inventoryApp}/login`,
  registerUrl: `${inventoryApp}/register`,
  heroBullets: [
    "Ventas de mostrador con cliente opcional",
    "Stock, compras, proveedores y movimientos",
    "Domicilios con seguimiento del courier",
    "Plan separe con 0 % y entrega inmediata",
  ],
  audience: [
    "Tiendas de barrio",
    "Papelerías y ferreterías",
    "Boutiques y regalos",
    "Tiendas de velas",
    "Locales con caja y vendedores",
    "Negocios con domicilios",
  ],
  features: [
    {
      icon: "▦",
      title: "Productos y stock",
      description: "Catálogo simple con precios, códigos, existencias mínimas y alertas de agotados.",
    },
    {
      icon: "⇧",
      title: "Compras y proveedores",
      description: "Registra entradas de mercancía y mantén el costo y las existencias al día.",
    },
    {
      icon: "▤",
      title: "Ventas y caja",
      description: "Crea la venta, cobra en caja y entrega en el mismo acto. Sin pasos innecesarios.",
    },
    {
      icon: "⌁",
      title: "Domicilios",
      description: "Asigna un domiciliario y sigue el pedido desde pendiente hasta entregado.",
    },
    {
      icon: "★",
      title: "Plan separe",
      description: "Reserva productos, recibe abonos y permite llevar con 0 % sin autorización de un administrador.",
    },
    {
      icon: "◎",
      title: "Clientes",
      description: "Cliente opcional en mostrador e historial disponible para domicilios y plan separe.",
    },
    {
      icon: "↗",
      title: "Reportes",
      description: "Ventas, inventario, movimientos, cancelaciones y flujo de caja por período.",
    },
    {
      icon: "⚿",
      title: "Equipo y roles",
      description: "Administrador, cajero, vendedor y domiciliario, cada uno con su alcance.",
    },
  ],
  flow: [
    {
      index: "01",
      title: "El vendedor crea el pedido",
      description: "Elige productos, cantidades y, si hace falta, los datos del cliente y la entrega.",
    },
    {
      index: "02",
      title: "La caja cobra",
      description: "El cajero registra el pago. El stock ya quedó descontado con la venta.",
    },
    {
      index: "03",
      title: "Entrega en tienda o domicilio",
      description: "En mostrador se entrega al pagar. En domicilio el courier marca en camino y entregado.",
    },
  ],
  roles: [
    { name: "ADMIN", description: "Catálogo, compras, caja, reportes, empleados y plan separe." },
    { name: "CAJERO", description: "Ventas, cobros, plan separe, domicilios y clientes." },
    { name: "VENDEDOR", description: "Crea pedidos, asesora y gestiona clientes." },
    { name: "DOMICILIARIO", description: "Solo sus domicilios asignados." },
  ],
  screenshots: [
    { kind: "dashboard", title: "Resumen del negocio", caption: "Stock, alertas, ventas y actividad reciente." },
    { kind: "pos", title: "Venta y cobro", caption: "Productos, cliente opcional y pago en caja." },
    { kind: "layaways", title: "Plan separe", caption: "Abonos, saldo y entrega inmediata con 0 %." },
    { kind: "deliveries", title: "Domicilios", caption: "Courier, estado y evidencia de entrega." },
  ],
  plan: {
    name: "Gratuito",
    price: "$0",
    limits: ["15 empleados", "100 productos", "300 contactos"],
    note: "Sin tarjeta. Empieza con lo básico y crece cuando lo necesites.",
  },
  faq: [
    {
      question: "¿Necesito registrar un cliente en cada venta?",
      answer: "No. En mostrador el cliente es opcional. Para domicilios y plan separe sí se solicita para tener contacto y trazabilidad.",
    },
    {
      question: "¿Inventory tiene cocina o preparación de pedidos?",
      answer: "No. Inventory es retail simple: el pedido se crea, se cobra y se entrega. Para cocina y mesas está Nemkit Restaurant.",
    },
    {
      question: "¿Puedo separar un producto con 0 %?",
      answer: "Sí. Plan separe permite 0 % de abono inicial y entrega inmediata sin autorización de un administrador.",
    },
    {
      question: "¿Maneja domicilios?",
      answer: "Sí. Puedes asignar un domiciliario y seguir el estado del pedido hasta la entrega.",
    },
  ],
};

export const RESTAURANT: ProductContent = {
  id: "restaurant",
  name: "Nemkit Restaurant",
  slug: "restaurant",
  eyebrow: "RESTAURANTE · DISPONIBLE",
  tagline: "Mesas, cocina y pedidos en un solo flujo.",
  description:
    "El flujo completo del restaurante: mesas, comandas, cocina, meseros, cocineros, recetas y domicilios. Cada pedido avanza hasta que la cocina lo prepara y el cliente lo recibe.",
  accent: "restaurant",
  appUrl: restaurantApp,
  loginUrl: `${restaurantApp}/login`,
  registerUrl: `${restaurantApp}/register`,
  heroBullets: [
    "Mesas y comandas",
    "Cocina: pendiente, preparando y listo",
    "Meseros y cocineros con roles propios",
    "Domicilios sincronizados con cocina",
  ],
  audience: [
    "Restaurantes",
    "Cafeterías",
    "Cocinas de comedor",
    "Negocios con mesas",
    "Restaurantes con domicilios",
    "Cocinas con recetas",
  ],
  features: [
    {
      icon: "🍽",
      title: "Mesas",
      description: "Crea tus mesas y consulta cuáles están libres o en uso en tiempo real.",
    },
    {
      icon: "▤",
      title: "Comandas",
      description: "Cada pedido nace como comanda y conserva sus ítems, notas y responsable.",
    },
    {
      icon: "👨‍🍳",
      title: "Cocina",
      description: "La cocina avanza de pendiente a preparando y listo, sin mezclar cobro ni reparto.",
    },
    {
      icon: "📖",
      title: "Recetas e insumos",
      description: "Asocia insumos a los platos para descontar stock automáticamente al vender.",
    },
    {
      icon: "⌁",
      title: "Domicilios",
      description: "La cocina marca listo y el domiciliario continúa con en camino y entregado.",
    },
    {
      icon: "▦",
      title: "Inventario",
      description: "Productos simples, insumos, compras, proveedores y movimientos en el mismo sistema.",
    },
    {
      icon: "↗",
      title: "Caja y reportes",
      description: "Cobra en caja y consulta ventas, inventario, cancelaciones y flujo de caja.",
    },
    {
      icon: "⚿",
      title: "Equipo y roles",
      description: "Administrador, cajero, vendedor, mesero, cocinero, domiciliario y bodega.",
    },
  ],
  flow: [
    {
      index: "01",
      title: "Se toma el pedido",
      description: "El mesero o la caja registra la comanda con mesa, cliente y productos.",
    },
    {
      index: "02",
      title: "La cocina prepara",
      description: "La comanda pasa de pendiente a preparando y luego a lista.",
    },
    {
      index: "03",
      title: "Se entrega y cobra",
      description: "En sitio se entrega en la mesa; en domicilio el courier marca en camino y entregado.",
    },
  ],
  roles: [
    { name: "ADMIN", description: "Toda la operación, configuración, reportes y equipo." },
    { name: "CAJERO", description: "Cobros, ventas, domicilios y clientes." },
    { name: "VENDEDOR", description: "Pedidos, clientes y domicilios." },
    { name: "MESERO", description: "Mesas, pedidos y seguimiento de comandas." },
    { name: "COCINERO", description: "Solo el tablero de preparación de cocina." },
    { name: "DOMICILIARIO", description: "Solo sus domicilios asignados." },
    { name: "BODEGA", description: "Productos, compras, proveedores y movimientos." },
  ],
  screenshots: [
    { kind: "kitchen", title: "Tablero de cocina", caption: "Comandas pendientes, en preparación y listas." },
    { kind: "tables", title: "Mesas", caption: "Ocupación y pedidos activos por mesa." },
    { kind: "order", title: "Comanda", caption: "Ítems, notas, responsable y estado de cobro." },
    { kind: "deliveries", title: "Domicilios", caption: "Cocina lista y reparto en camino." },
  ],
  plan: {
    name: "Gratuito",
    price: "$0",
    limits: ["30 empleados", "300 productos", "1.000 contactos"],
    note: "Sin tarjeta. Ideal para empezar a ordenar mesas, cocina y pedidos.",
  },
  faq: [
    {
      question: "¿Restaurant incluye cocina?",
      answer: "Sí. La cocina es el centro del flujo: recibe comandas y avanza pendiente, preparando y listo.",
    },
    {
      question: "¿Puedo manejar mesas y domicilios?",
      answer: "Sí. Las mesas se usan en sitio y los domicilios se sincronizan con el estado de cocina.",
    },
    {
      question: "¿Maneja recetas e insumos?",
      answer: "Sí. Los platos pueden tener receta para descontar insumos del inventario al vender.",
    },
    {
      question: "¿Restaurant tiene plan separe?",
      answer: "No en el MVP. Plan separe pertenece a Nemkit Inventory. Restaurant se enfoca en mesas, cocina y pedidos.",
    },
  ],
};

export const PRODUCTS: ProductContent[] = [INVENTORY, RESTAURANT];

export const PLATFORM_FEATURES = [
  {
    icon: "⚿",
    title: "Cuentas y roles",
    description: "Un administrador, cajeros, vendedores y el equipo operativo con permisos claros.",
  },
  {
    icon: "◎",
    title: "Empleados",
    description: "Cada persona entra con su propio acceso; no se comparten contraseñas.",
  },
  {
    icon: "▦",
    title: "Multiempresa",
    description: "Cada negocio ve solo su información, sus productos y sus movimientos.",
  },
  {
    icon: "↗",
    title: "Reportes",
    description: "Indicadores y consultas por período para decidir con datos del negocio.",
  },
  {
    icon: "✓",
    title: "Seguridad",
    description: "Sesiones, refresh tokens y permisos por rol en cada operación.",
  },
  {
    icon: "✳",
    title: "Base Nemkit",
    description: "La misma base técnica para ambos productos; cada app evoluciona por separado.",
  },
];

export const HOME_FAQ = [
  {
    question: "¿Cuál producto elijo?",
    answer: "Si vendes productos en una tienda o local, elige Inventory. Si tienes mesas, cocina y comandas, elige Restaurant.",
  },
  {
    question: "¿Puedo tener los dos?",
    answer: "Sí, pero son productos y cuentas independientes. Cada uno tiene su propio registro y su propia operación.",
  },
];
