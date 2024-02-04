import { render, screen } from "@testing-library/react";
import App from "../App";

describe("APP", () => {
  test("renders", () => {
    render(<App />);

    expect(screen.getAllByText(/Characters Page!/)).toBeDefined();
  });
});
