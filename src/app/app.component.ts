import { Component, HostListener, signal } from "@angular/core";
import { environment } from "../environments/environment";

export type ProductStatus = "available" | "soon" | "exploring";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  url: string | null;
  cta: string;
  features: string[];
  icon: string;
  accent: "sage" | "gold" | "lavender";
}

const trim = (url: string): string => url.replace(/\/$/, "");

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  menuOpen = signal(false);

  readonly inventoryLandingUrl = trim(environment.inventoryLandingUrl);
  readonly notifyLandingUrl = trim(environment.notifyLandingUrl);

  private readonly inventoryApp = trim(environment.inventoryAppUrl);

  readonly loginUrl = `${this.inventoryApp}/login`;
  readonly registerUrl = `${this.inventoryApp}/register`;

  readonly products: Product[] = [
    {
      id: "inventory",
      name: "Nemkit Inventory",
      tagline: "Inventario, ventas y restaurante",
      description:
        "Controla existencias, compras y ventas; consulta clientes, equipo y reportes en línea. Si tienes restaurante, suma mesas, comandas, cocina y domicilios.",
      status: "available",
      statusLabel: "Disponible",
      url: this.inventoryLandingUrl,
      cta: "Ver Inventory",
      features: [
        "Inventario, alertas de stock y movimientos",
        "Compras, ventas y cobros trazables",
        "Clientes, fidelidad y reportes por período",
        "Equipo, ventas por empleado y pagos",
        "Modo restaurante: mesas, cocina y domicilios",
      ],
      icon: "▦",
      accent: "sage",
    },
    {
      id: "notify",
      name: "Nemkit Notify",
      tagline: "Email, SMS y WebPush",
      description:
        "El siguiente producto de la plataforma: un solo motor para comunicarte con tus clientes, con API propia, temas, suscriptores e historial de entregas.",
      status: "soon",
      statusLabel: "Próximamente",
      url: this.notifyLandingUrl || null,
      cta: "Muy pronto",
      features: [
        "Campañas por email, SMS y WebPush",
        "API keys por empresa",
        "Temas, suscriptores y audiencias",
        "Historial y métricas por canal",
      ],
      icon: "✉",
      accent: "gold",
    },
    {
      id: "more",
      name: "Lo que viene",
      tagline: "El ecosistema sigue creciendo",
      description:
        "Estamos explorando nuevas herramientas para completar la operación de tu negocio. La misma cuenta y la misma forma de trabajar.",
      status: "exploring",
      statusLabel: "En exploración",
      url: null,
      cta: "",
      features: [],
      icon: "✳",
      accent: "lavender",
    },
  ];

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  @HostListener("document:keydown.escape")
  closeMenuWithEscape(): void {
    if (this.menuOpen()) this.closeMenu();
  }
}
