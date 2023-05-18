import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#EFC19E",
      secondary: "#111322",
      green: "#C0C9A2",
      mid: "#DBC9BF",
      greyWhite: "#EDECE8",
      blue: "#506D84",
      white: "#F5F4F0",
    },
    primary: {
      300: "#F7D8C1",
      500: "#EFC19E",
      600: "#E8A36F",
    },
    secondary: {
      100: "#4d4b4b",
      300: "#171B3D",
      500: "#111322",
    },
    green: {
      300: "#B6C28F",
      500: "#C0C9A2",
      600: "#ADBD79",
    },
  },
  fonts: {
    heading: "font-family: 'Roboto', sans-serif;",
    body: "font-family: 'Roboto', sans-serif;",
  },

  shadows: {
    sidebar: "-5px 0px 20px 10px rgba(0, 0, 0, 0.05);",
    card: "0px 20px 50px 15px rgba(0, 0, 0, 0.05);",
    table: "0px 2px 10px 3px rgba(0, 0, 0, 0.04);",
    tab: "0px -10px 50px 15px rgba(0, 0, 0, 0.06);",
  },
});
