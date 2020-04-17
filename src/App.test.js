import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders App without crashing", () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const element = getByText(/hello world/i);

  // Assert
  expect(element).toBeInTheDocument();

});
