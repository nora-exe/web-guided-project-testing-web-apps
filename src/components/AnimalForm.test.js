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

  expect(submitButton).not.toBeDisabled(); // (sometimes it makes sense to include mini-assertions like this as part of the arrange step)

  // Act: fill out and submit the form
  userEvent.type(speciesInput, "Mountain Goat97");
  userEvent.type(ageInput, "987");
  userEvent.type(notesInput, "Recently trimmed my beard. Feeling great!!");
  userEvent.click(submitButton);

  // Assert
  const newAnimal = screen.getByText(/mountain goat97/i);
  
  expect(newAnimal).toBeVisible();
  expect(newAnimal).toBeDefined();
  expect(newAnimal).not.toBeDisabled();

})