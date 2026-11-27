import { Component, HostListener, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { INVENTORY, RESTAURANT } from "../../content/products";

@Component({
  selector: "app-site-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./site-header.component.html",
})
export class SiteHeaderComponent {
  readonly inventory = INVENTORY;
  readonly restaurant = RESTAURANT;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener("document:keydown.escape")
  closeMenuWithEscape(): void {
    if (this.menuOpen()) this.closeMenu();
  }
}
