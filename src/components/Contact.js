import React from "react";
import "../styles.css"; 

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-white flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">Contact Me</h2>
        <form className="bg-gray-100 p-6 rounded-lg shadow-lg blinking-shadow">
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
          </label>
          <div className="flex justify-center">
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
