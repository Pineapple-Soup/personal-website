"use client";

import { useState } from "react";
import { ContactFormData } from "@/types";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent!");
      clearForm();
    } else {
      alert("Something went wrong.");
      clearForm();
    }
  };

  return (
    <form className=' flex flex-col p-4' onSubmit={handleSubmit}>
      <div className='flex space-x-4'>
        <input
          name='firstName'
          value={form.firstName}
          onChange={handleChange}
          type='text'
          placeholder='First Name'
          required={true}
          className='bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2'
        />
        <input
          name='lastName'
          value={form.lastName}
          onChange={handleChange}
          type='text'
          placeholder='Last Name'
          required={true}
          className='bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2'
        />
      </div>
      <input
        name='email'
        value={form.email}
        onChange={handleChange}
        type='email'
        placeholder='Email'
        required={true}
        className='bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2'
      />
      <input
        name='subject'
        value={form.subject}
        onChange={handleChange}
        type='text'
        placeholder='Subject'
        required={true}
        className='bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2'
      />
      <textarea
        name='message'
        value={form.message}
        onChange={handleChange}
        placeholder='Message'
        required={true}
        className='bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 resize-none rounded-lg p-2 my-2'
        rows={5}
      />
      <button
        type='submit'
        className='bg-secondary hover:bg-accent rounded-lg p-2 my-2'>
        Submit
      </button>
    </form>
  );
}
