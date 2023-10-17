import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { CharactersPage } from "./pages/Characters";
import { Home } from "./pages/Home";
import { LocationsPage } from "./pages/Locations";
import { Routes as URL } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <main className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path={URL.HOME} element={<Home />} />
            <Route path={URL.CHARACTERS} element={<CharactersPage />} />
            <Route path={URL.LOCATIONS} element={<LocationsPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </main>
  );
}

export default App;
