import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
