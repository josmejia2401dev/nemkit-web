import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "Nemkit — Inventory y Restaurant para tu negocio",
    loadComponent: () =>
      import("./pages/home/home.page").then((module) => module.HomePageComponent),
  },
  {
    path: "inventory",
    title: "Nemkit Inventory — Vende simple y controla todo",
    loadComponent: () =>
      import("./pages/inventory/inventory.page").then((module) => module.InventoryPageComponent),
  },
  {
    path: "restaurant",
    title: "Nemkit Restaurant — Mesas, cocina y pedidos",
    loadComponent: () =>
      import("./pages/restaurant/restaurant.page").then((module) => module.RestaurantPageComponent),
  },
  { path: "**", redirectTo: "" },
];
