import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders App component without crashing', () => {
  render(<App />);
});

test('renders the app header', () => {
  // Arrange (set up the virtual dom & find elements)
  const virtualDOM = render(<App />);
  const header = virtualDOM.getByText(/add new animal/i);
  // ^ getByText includes an implicit assertion that there is 1 and only 1 matching element.

  // Act (for clicking a button or other interaction, not needed here)

  // Assert (test stuff!)
  // Don't worry about being DRY in tests!
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
  
  
});

// BDD: Behavior Driven Development
// TDD: Test Driven Development
// Both terms loosely used to describe the same pattern of writing tests first. Write a test describing what you want to happen (documentation!) and watch it fail, then work on your code until it passes.

// When writing tests, be careful to avoid false positives! Sanity checks are important when writing tests for existing (already functional) code

// Especially if you're the one writing the application code too (most common), think about edge cases and try to approach the question from a different point of view rather than just repeating what you did in the application code.