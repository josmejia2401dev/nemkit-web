import { ApplicationConfig } from "@angular/core";
import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";
import { providePrimeNG } from "primeng/config";

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
