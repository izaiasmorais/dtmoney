import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: {
    "100": "#ffffff",
    "300": "#f0f2f5",
    "400": "#E7E9EE",
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
  green: {
    "500": "#33cc95",
  },
  blue: {
    "700": "#6933ff",
  },
};

export const theme = extendTheme({
  useSystemColorMode: true,
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});
