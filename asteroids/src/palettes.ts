import { PaletteMode } from "@mui/material/styles";

const darkPalette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#000",
    light: "#121212",
    contrastText: "#fff",
  },
  secondary: {
    main: "#fff",
  },
};

const lightPalette = {
  mode: "light" as PaletteMode,
  primary: {
    main: "#fff",
    light: "#e5e5e5",
    contrastText: "#000",
  },
  secondary: {
    main: "#cdcdcd",
  },
};

export { darkPalette, lightPalette };
