import { ApplicationConfig } from "@angular/core";
import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";
import { providePrimeNG } from "primeng/config";

const NemkitPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#EBFFE5",
      100: "#D2FFC4",
      200: "#A8FF8F",
      300: "#7BFF5C",
      400: "#57FF32",
      500: "#39FF14",
      600: "#2ECC11",
      700: "#22A30D",
      800: "#1B7A0A",
      900: "#125206",
      950: "#0A2E03",
    },
    colorScheme: {
      dark: {
        primary: {
          color: "#39FF14",
          contrastColor: "#06110A",
          hoverColor: "#57FF32",
          activeColor: "#2ECC11",
        },
        surface: {
          0: "#0A0F0C",
          50: "#0E1411",
          100: "#121A15",
          200: "#1A241F",
          300: "#25332C",
          400: "#35463D",
          500: "#4B5E54",
          600: "#6E8077",
          700: "#93A39A",
          800: "#BCC7C1",
          900: "#E3E9E5",
          950: "#F4F7F5",
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
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
