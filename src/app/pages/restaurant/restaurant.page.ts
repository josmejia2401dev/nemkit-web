import { Component } from "@angular/core";
import { RESTAURANT } from "../../content/products";
import { ProductPageComponent } from "../../shared/product-page/product-page.component";

@Component({
  selector: "app-restaurant-page",
  standalone: true,
  imports: [ProductPageComponent],
  templateUrl: "./restaurant.page.html",
})
export class RestaurantPageComponent {
  readonly product = RESTAURANT;
}
