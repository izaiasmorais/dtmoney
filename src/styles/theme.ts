import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: {
    "100": "#ffffff",
    "300": "#e1e1e6",
    "500": "#c4c4cc",
    "700": "#7c7c8a",
  },
  gray: {
    "100": "#323238",
    "300": "#29292e",
    "500": "#202024",
    "700": "#121214",
  },
  red: {
    "100": "#F75A68",
    "500": "#AA2834",
  },
  purple: {
    "100": "#B08FFF",
    "500": "#8257E5",
    "700": "#5E3FA6",
  },
};

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  styles: {
    global: {
      body: {
        bg: "gray.700",
        color: "white.100",
      },
    },
  },
});
