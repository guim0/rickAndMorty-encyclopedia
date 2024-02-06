import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { EpisodesPage } from "../../pages/Episodes";

const queryClient = new QueryClient();
describe("Episodes Page renders", () => {
  test("page render", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <EpisodesPage />
        </Router>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Episodes")).toBeInTheDocument();
    });
  });
});
