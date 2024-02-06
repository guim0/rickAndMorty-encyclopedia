import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CharactersPage } from "../../pages/Characters";

const queryClient = new QueryClient();
describe("Characters Page renders", () => {
  test("page render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <CharactersPage />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText("Characters")).toBeInTheDocument();
  });
});
