import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { ProductContent } from "../../content/products";
import { ProductVisualComponent } from "../product-visual/product-visual.component";

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [RouterLink, ProductVisualComponent],
  templateUrl: "./product-page.component.html",
})
export class ProductPageComponent {
  @Input({ required: true }) product!: ProductContent;
}
