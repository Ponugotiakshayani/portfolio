'use client';

import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent successfully ✅');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong ❌');
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Please contact me directly at <a href="mailto:aponugot@asu.edu" className="text-primary underline">aponugot@asu.edu</a> or through this form.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-gray-800"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              value={form.email}
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-gray-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-md shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-gray-800"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition font-medium"
          >
            Send Message
          </button>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">{status}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
