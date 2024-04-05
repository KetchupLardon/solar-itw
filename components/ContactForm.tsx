"use client";
import { useState } from "react";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface IFormError {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<IForm>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<IFormError>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //   const handleTextAreaChange = (event: HTMLInputElement) => {
  //     console.log(event.target);
  //   };

  console.log(formData);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newErrors: IFormError = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setError(newErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" onChange={handleChange} />
        {error.firstName && <span>{error.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" onChange={handleChange} />
        {error.firstName && <span>{error.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={handleChange} />
        {error.firstName && <span>{error.email}</span>}
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        {error.firstName && <span>{error.message}</span>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
