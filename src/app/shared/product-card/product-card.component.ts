import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { ProductContent } from "../../content/products";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductContent;
}
