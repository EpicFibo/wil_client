import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "##1f1f1f",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50057",
    },
    info: {
      main: "#ffffff",
    },
    error: {
      main: red.A700,
    },
  },
});

export default theme;
