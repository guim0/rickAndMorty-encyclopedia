import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { CharactersPage } from "./pages/Characters";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <main className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </main>
  );
}

export default App;
