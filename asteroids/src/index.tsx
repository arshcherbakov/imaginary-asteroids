import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     light: "#757ce8",
  //     main: "#3f50b5",
  //     dark: "#000",
  //     contrastText: "#fff",
  //   },
  // },
  palette: {
    // mode: "dark",
    primary: {
      main: "#000", // Customize the primary color for the dark theme
    },
  },
  colorSchemes: {
    dark: true,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
