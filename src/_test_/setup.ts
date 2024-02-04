import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

afterEach(() => {
  cleanup();
});
expect.extend(matchers);
