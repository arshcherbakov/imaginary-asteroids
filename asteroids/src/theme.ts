import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      green: string;
    };
    themeScreen: {
      colorFlag: boolean;
    };
  }

  interface PaletteOptions {
    colors: {
      green?: string;
    };
    themeScreen: {
      colorFlag?: boolean;
    };
  }
}

export const theme: Theme = createTheme({
  palette: {
    colors: {
      green: "#16993B",
    },
    themeScreen: {
      colorFlag: true,
    },
  },
});
