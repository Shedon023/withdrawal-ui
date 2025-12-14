import { CssBaseline, ThemeProvider } from "@mui/material";
import WidthrawPage from "../pages/WidthrawPage";
import { theme } from "../theme/Theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <WidthrawPage />
      </ThemeProvider>
    </>
  );
}

export default App;
