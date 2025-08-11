import React from "react";
import { ContactFormData } from "@/types";
import { Html, Tailwind } from "@react-email/components";

export default function EmailTemplate({
  firstName,
  lastName,
  email,
  subject,
  message,
}: ContactFormData) {
  return (
    <Html>
      <Tailwind>
        <div className='bg-gray-100 p-6 rounded-lg text-base max-w-xl mx-auto font-sans'>
          <h2 className='text-xl font-bold mb-4 text-black'>
            ✉️ New Message from {firstName} {lastName}
          </h2>

          <p className='mb-2'>
            <span className='font-semibold text-gray-800'>From:</span>{" "}
            <a href={`mailto:${email}`} className='text-blue-600 underline'>
              {email}
            </a>
          </p>

          <p className='mb-2'>
            <span className='font-semibold text-gray-800'>Subject:</span>{" "}
            {subject}
          </p>

          <p className='mb-2 font-semibold text-gray-800'>Message:</p>
          <div className='bg-white border border-gray-300 p-4 rounded whitespace-pre-wrap text-gray-900'>
            {message}
          </div>
        </div>
      </Tailwind>
    </Html>
  );
}
