import { Component, Input } from "@angular/core";
import type { ProductId, ProductScreenshot } from "../../content/products";

type VisualKind = ProductScreenshot["kind"];
type Tone = "ok" | "warn" | "danger" | "muted";

interface VisualMetric {
  label: string;
  value: string;
  hint: string;
  tone: Tone;
}

interface VisualRow {
  title: string;
  subtitle: string;
  value: string;
  tone: Tone;
}

interface VisualData {
  title: string;
  subtitle: string;
  metrics: VisualMetric[];
  rows: VisualRow[];
}

const VISUALS: Record<VisualKind, VisualData> = {
  dashboard: {
    title: "Resumen del negocio",
    subtitle: "Stock, ventas y actividad",
    metrics: [
      { label: "Productos", value: "248", hint: "activos", tone: "ok" },
      { label: "Agotados", value: "3", hint: "requieren atención", tone: "danger" },
      { label: "Stock bajo", value: "8", hint: "en mínimo", tone: "warn" },
    ],
    rows: [
      { title: "Venta en caja", subtitle: "Hoy, 10:24 a. m.", value: "$128.000", tone: "ok" },
      { title: "Entrada de mercancía", subtitle: "Ayer, 4:16 p. m.", value: "+24", tone: "ok" },
      { title: "Domicilio en camino", subtitle: "Pedido #1042", value: "En ruta", tone: "warn" },
    ],
  },
  pos: {
    title: "Venta en caja",
    subtitle: "Cliente opcional · 4 ítems",
    metrics: [
      { label: "Total", value: "$128.000", hint: "a cobrar", tone: "ok" },
      { label: "Ítems", value: "4", hint: "productos", tone: "muted" },
      { label: "Cliente", value: "Opcional", hint: "mostrador", tone: "warn" },
    ],
    rows: [
      { title: "Vela aromática", subtitle: "2 × $24.000", value: "$48.000", tone: "ok" },
      { title: "Set de regalo", subtitle: "1 × $56.000", value: "$56.000", tone: "ok" },
      { title: "Tarjeta artesanal", subtitle: "1 × $24.000", value: "$24.000", tone: "ok" },
    ],
  },
  layaways: {
    title: "Plan separe",
    subtitle: "Saldo y abonos",
    metrics: [
      { label: "Total", value: "$400.000", hint: "producto reservado", tone: "muted" },
      { label: "Abonado", value: "$80.000", hint: "20 %", tone: "ok" },
      { label: "Saldo", value: "$320.000", hint: "pendiente", tone: "warn" },
    ],
    rows: [
      { title: "Cuota inicial", subtitle: "Hoy, 9:10 a. m.", value: "$80.000", tone: "ok" },
      { title: "Entrega inmediata", subtitle: "Permitida con 0 %", value: "Activa", tone: "ok" },
      { title: "Próximo vencimiento", subtitle: "15 de diciembre", value: "30 días", tone: "warn" },
    ],
  },
  deliveries: {
    title: "Domicilios",
    subtitle: "Seguimiento del courier",
    metrics: [
      { label: "Pendientes", value: "4", hint: "por recoger", tone: "warn" },
      { label: "En camino", value: "2", hint: "en ruta", tone: "ok" },
      { label: "Entregados", value: "18", hint: "hoy", tone: "ok" },
    ],
    rows: [
      { title: "Calle 12 # 4-56", subtitle: "Courier: Andrés", value: "En ruta", tone: "warn" },
      { title: "Carrera 8 # 20-14", subtitle: "Courier: Laura", value: "Pendiente", tone: "muted" },
      { title: "Av. Principal # 3-90", subtitle: "Courier: Andrés", value: "Entregado", tone: "ok" },
    ],
  },
  kitchen: {
    title: "Cocina",
    subtitle: "Comandas en preparación",
    metrics: [
      { label: "Pendientes", value: "3", hint: "por iniciar", tone: "warn" },
      { label: "Preparando", value: "2", hint: "en cocina", tone: "ok" },
      { label: "Listos", value: "4", hint: "para servir", tone: "ok" },
    ],
    rows: [
      { title: "Mesa 4 · #128", subtitle: "2× Pollo guisado · 1× Limonada", value: "Preparando", tone: "warn" },
      { title: "Mesa 7 · #129", subtitle: "1× Pasta · 1× Ensalada", value: "Pendiente", tone: "muted" },
      { title: "Domicilio · #130", subtitle: "3× Hamburguesa", value: "Listo", tone: "ok" },
    ],
  },
  tables: {
    title: "Mesas",
    subtitle: "Ocupación del salón",
    metrics: [
      { label: "Libres", value: "6", hint: "disponibles", tone: "ok" },
      { label: "En uso", value: "4", hint: "con pedido", tone: "warn" },
      { label: "Pedidos", value: "5", hint: "activos", tone: "ok" },
    ],
    rows: [
      { title: "Mesa 1", subtitle: "2 personas · #124", value: "En uso", tone: "warn" },
      { title: "Mesa 2", subtitle: "Libre", value: "Disponible", tone: "ok" },
      { title: "Mesa 3", subtitle: "4 personas · #125", value: "En uso", tone: "warn" },
    ],
  },
  order: {
    title: "Comanda #128",
    subtitle: "Mesa 4 · Mesero: Camila",
    metrics: [
      { label: "Ítems", value: "4", hint: "productos", tone: "muted" },
      { label: "Total", value: "$86.000", hint: "por cobrar", tone: "warn" },
      { label: "Estado", value: "Preparando", hint: "cocina", tone: "ok" },
    ],
    rows: [
      { title: "Pollo guisado", subtitle: "2 × $28.000", value: "$56.000", tone: "ok" },
      { title: "Limonada natural", subtitle: "1 × $12.000", value: "$12.000", tone: "ok" },
      { title: "Porción de arroz", subtitle: "1 × $18.000", value: "$18.000", tone: "ok" },
    ],
  },
};

@Component({
  selector: "app-product-visual",
  standalone: true,
  templateUrl: "./product-visual.component.html",
  styleUrl: "./product-visual.component.css",
})
export class ProductVisualComponent {
  @Input({ required: true }) kind!: VisualKind;
  @Input() productId: ProductId = "inventory";

  get data(): VisualData {
    return VISUALS[this.kind];
  }
}
