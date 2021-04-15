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
  
  // getByText already has an implicit assertion, but we can be extra safe with additional assertions like these:
  expect(newAnimal).toBeVisible();
  expect(newAnimal).toBeDefined();
  expect(newAnimal).not.toBeDisabled();
})

// More potential tests:
// Try edge cases with different input types in the form fields (see if they break or if the request fails, try a lot of variations to be sure)
// Add several animals and make sure they all show up, and don't overwrite each other or any other weird behavior
// Test duplicate entries and confirm the desired behavior
// If type checks are required (ex: for age), test those too