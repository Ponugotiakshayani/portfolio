'use client';
import { useState } from 'react';

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Your Message"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Send Message
      </button>
      <p className="text-sm text-gray-600">{status}</p>
    </form>
  );
}
