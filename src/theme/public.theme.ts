import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16C7D9",
      dark: "#08AFC3",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#30345F",
    },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#30345F",
      secondary: "#64748B",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontWeight: 800,
      color: "#30345F",
    },

    h2: {
      fontWeight: 700,
      color: "#30345F",
    },

    h3: {
      fontWeight: 700,
      color: "#30345F",
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
