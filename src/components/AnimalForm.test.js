import React from "react";
import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('component renders without blowing up', () => {
  render(<AnimalForm />);
})

test('user can fill out and submit form', () => {
  render(<AnimalForm />);

  // Get the form inputs from the virtual DOM
  const speciesInput = screen.getByLabelText(/species/i);

})