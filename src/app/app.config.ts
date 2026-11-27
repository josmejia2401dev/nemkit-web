import { ApplicationConfig } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";
import { providePrimeNG } from "primeng/config";
import { routes } from "./app.routes";

const NemkitPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#EAF4EF",
      100: "#D2E8DE",
      200: "#A6D2C0",
      300: "#7BBCA2",
      400: "#4F9E7F",
      500: "#276650",
      600: "#1F5644",
      700: "#184538",
      800: "#12352B",
      900: "#0C261F",
      950: "#061812",
    },
    colorScheme: {
      dark: {
        primary: {
          color: "#5FA98C",
          contrastColor: "#06110A",
          hoverColor: "#7FBFA6",
          activeColor: "#276650",
        },
        surface: {
          0: "#F4F7F5",
          50: "#E3E9E5",
          100: "#BCC7C1",
          200: "#93A39A",
          300: "#6E8077",
          400: "#4B5E54",
          500: "#35463D",
          600: "#25332C",
          700: "#1A241F",
          800: "#121A15",
          900: "#0E1411",
          950: "#0A0F0C",
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "top" }),
    ),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: NemkitPreset,
        options: {
          darkModeSelector: ".nk-dark",
          cssLayer: false,
        },
      },
    }),
  ],
};
