import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { EpisodesPage } from "../../pages/Episodes";
import { LocationsPage } from "../../pages/Locations";

const queryClient = new QueryClient();
describe("Locations Page renders", () => {
  test("page render", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <LocationsPage />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText("Location")).toBeInTheDocument();
  });
});
