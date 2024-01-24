import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { CharactersPage } from "./pages/Characters";
import { EpisodesPage } from "./pages/Episodes";
import { Home } from "./pages/Home";
import { LocationsPage } from "./pages/Locations";
import { Routes as URL } from "./routes";
const queryClient = new QueryClient();

function App() {
  return (
    <main className="bg-slate-600">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path={URL.HOME} element={<Home />} />
            <Route path={URL.CHARACTERS} element={<CharactersPage />} />
            <Route path={URL.LOCATIONS} element={<LocationsPage />} />
            <Route path={URL.EPISODES} element={<EpisodesPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </main>
  );
}

export default App;
