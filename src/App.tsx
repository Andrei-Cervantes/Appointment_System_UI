import { ThemeProvider } from "./components/theme/theme-provider";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
