'use client';

import { useState } from 'react';
import { MdSend, MdAutorenew, MdCheckCircle, MdError } from 'react-icons/md';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '@/types';

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const resetForm = () => {
    setTimeout(() => setFormState('idle'), 2000);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setFormState('success');
      resetForm();
    } else {
      setFormState('error');
      resetForm();
    }
  };

  return (
    <form className=" flex flex-col p-4" onSubmit={handleSubmit}>
      <div className="flex space-x-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          required={true}
          className="bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          required={true}
          className="bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2"
        />
      </div>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        required={true}
        className="bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2"
      />
      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        type="text"
        placeholder="Subject"
        required={true}
        className="bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        required={true}
        className="bg-secondary focus:outline-hidden focus:ring-accent focus:ring-4 placeholder-slate-600 resize-none rounded-lg p-2 my-2"
        rows={5}
      />
      <motion.button
        type="submit"
        whileTap={{ translateY: 5 }}
        className="flex items-center justify-center gap-2 bg-secondary hover:bg-accent rounded-lg p-2 my-2 w-full cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {formState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <MdSend className="text-xl" />
              <span>Submit</span>
            </motion.div>
          )}

          {formState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <MdAutorenew className="text-xl" />
              </motion.div>
              <span>Sending...</span>
            </motion.div>
          )}

          {formState === 'success' && (
            <motion.div
              key="success"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.35, ease: 'easeOut' },
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="flex items-center gap-2"
            >
              <MdCheckCircle className="text-xl" />
              <span>Sent!</span>
            </motion.div>
          )}

          {formState === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-red-500"
            >
              <MdError className="text-xl" />
              <span>Error</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
