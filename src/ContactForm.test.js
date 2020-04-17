import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("testing form", () => {
    const { getByLabelText, getByText } = render(<ContactForm/>);

    const firstNameInput = getByLabelText(/first name*/i)
    const lastNameInput = getByLabelText(/last name*/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)


    expect(firstNameInput).toBeVisible();
    expect(lastNameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(messageInput).toBeVisible();
});

test("Testing input value change", () => {
    const { getByLabelText, getByTestId } = render(<ContactForm />)

    const firstNameInput = getByLabelText(/first name*/i);

    fireEvent.change(firstNameInput, {target: { value: "new" }})

    expect(firstNameInput.value).toBe("new");

    fireEvent.click(getByTestId(/test/i));
}) 
