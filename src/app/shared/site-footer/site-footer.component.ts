import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { INVENTORY, RESTAURANT } from "../../content/products";

@Component({
  selector: "app-site-footer",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./site-footer.component.html",
})
export class SiteFooterComponent {
  readonly inventory = INVENTORY;
  readonly restaurant = RESTAURANT;
  readonly year = new Date().getFullYear();
}
