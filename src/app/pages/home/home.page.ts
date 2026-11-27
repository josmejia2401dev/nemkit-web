import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HOME_FAQ, INVENTORY, PLATFORM_FEATURES, PRODUCTS, RESTAURANT } from "../../content/products";
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ProductVisualComponent } from "../../shared/product-visual/product-visual.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [RouterLink, ProductCardComponent, ProductVisualComponent],
  templateUrl: "./home.page.html",
})
export class HomePageComponent {
  readonly inventory = INVENTORY;
  readonly restaurant = RESTAURANT;
  readonly products = PRODUCTS;
  readonly platformFeatures = PLATFORM_FEATURES;
  readonly faq = HOME_FAQ;
}
