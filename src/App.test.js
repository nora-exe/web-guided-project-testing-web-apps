import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders App component without crashing', () => {
  render(<App />);
});

test('renders the app header', () => {
  const virtualDOM = render(<App />);
  console.log(virtualDOM);
  const header = virtualDOM.getByText("Add New Animal");
});

// BDD: Behavior Driven Development
// TDD: Test Driven Development
// Both terms loosely used to describe the same pattern of writing tests first. Write a test describing what you want to happen (documentation!) and watch it fail, then work on your code until it passes.

// When writing tests, be careful to avoid false positives! Sanity checks are important when writing tests for existing (already functional) code

// Especially if you're the one writing the application code too (most common), think about edge cases and try to approach the question from a different point of view rather than just repeating what you did in the application code.