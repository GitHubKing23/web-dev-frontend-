import React, { useState } from 'react';

export default function ChatWidget() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/.netlify/functions/sendRegistration', {
        method: 'POST',
        body: JSON.stringify({ name, email, project: input }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="p-4 border rounded max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          placeholder="Tell us about your project"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          rows={3}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded w-full"
        >
          Send
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-600 mt-2">Thanks! We'll be in touch.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
