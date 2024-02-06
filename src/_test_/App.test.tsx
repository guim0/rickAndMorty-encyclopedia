import { render, screen } from "@testing-library/react";
import App from "../App";

describe.only("App.tsx", () => {
  test("renders", () => {
    render(<App />);

    expect(screen.getByText(/What'll you find here?/)).toBeDefined();
  });
});
