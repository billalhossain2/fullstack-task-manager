// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#00a5b715] min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have questions or feedback? We'd love to hear from you! Reach out to us using the
          contact information below.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">info@taskflow.com</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-700">+1 (555) 123-4567</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-700">123 Task Street, Cityville, Country</p>
        </div>
        <p className="text-gray-700">
          We aim to respond to inquiries within 24 hours. Your feedback is valuable to us!
        </p>
      </div>
    </div>
  );
};

export default Contact;
