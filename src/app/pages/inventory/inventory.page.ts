import { Component } from "@angular/core";
import { INVENTORY } from "../../content/products";
import { ProductPageComponent } from "../../shared/product-page/product-page.component";

@Component({
  selector: "app-inventory-page",
  standalone: true,
  imports: [ProductPageComponent],
  templateUrl: "./inventory.page.html",
})
export class InventoryPageComponent {
  readonly product = INVENTORY;
}
