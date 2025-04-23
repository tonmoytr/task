"use client";

import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function EmailClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API call
    setLoading(false);
    setSent(true);
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  if (sent) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center text-green-600 text-xl font-semibold">
          MESSAGE SENT
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
        >
          <FaUser className="text-indigo-500" /> Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
        >
          <FaEnvelope className="text-indigo-500" /> Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="johndoe@example.com"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
        >
          <FaPaperPlane className="text-indigo-500" /> Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi there, I'm interested in your services. Let's connect!"
          rows="4"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <FaPaperPlane className="animate-pulse" /> Sending...
          </>
        ) : (
          <>
            <FaPaperPlane className="text-white" /> Send
          </>
        )}
      </button>
    </form>
  );
}
