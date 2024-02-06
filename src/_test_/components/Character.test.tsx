import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Character } from "../../components/Characters/Character";

describe("Character Component", () => {
  test("renders", () => {
    const mocking = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };
    render(<Character {...mocking} />);

    expect(screen.getByText(/Rick Sanchez/)).toBeDefined();
    expect(screen.getByText(/Alive/)).toBeDefined();
  });
});
