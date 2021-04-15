import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimalForm from "./AnimalForm";

test('component renders without blowing up', () => {
  render(<AnimalForm />);
})

test('user can fill out and submit form to add an animal', () => {
  // Arrange: render the element & get the form elements from the virtual DOM
  render(<AnimalForm />);
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);
  const submitButton = screen.getByRole("button", { value: /submit!/i });

  // Act: fill out and submit the form
  userEvent.type(speciesInput, "Mountain Goat");
  


  // Assert
})