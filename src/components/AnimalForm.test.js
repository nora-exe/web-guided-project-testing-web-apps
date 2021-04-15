import React from "react";
import { render } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('component renders without blowing up', () => {
    render(<AnimalForm />)
})