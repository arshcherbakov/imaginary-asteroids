import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {}

  interface PaletteOptions {}
}

export const theme: Theme = createTheme({
  palette: {},
});
