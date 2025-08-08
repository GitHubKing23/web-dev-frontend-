import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hey there! 👋 Welcome to WebMasteryPro — need help building a website or improving an existing one?',
    },
  ]);
  const [showContactLink, setShowContactLink] = useState(false);

  const gtag = window.gtag || function () {};

  const addMessage = (from, text) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage('user', input);

    switch (step) {
      case 0:
        addMessage('bot', 'Are you looking for a brand new site, a redesign, or something else?');
        gtag('event', 'chat_widget_step_0', {
          event_category: 'ChatWidget',
          event_label: 'Initial engagement',
        });
        break;
      case 1:
        addMessage('bot', 'We can send you a free quote or schedule a quick 15-minute consultation.');
        addMessage('bot', "What's your name and best email so we can follow up with details?");
        gtag('event', 'chat_widget_step_1', {
          event_category: 'ChatWidget',
          event_label: 'Requested user info',
        });
        break;
      case 2:
        const parts = input.trim().split(/\s+/);
        const userName = parts.slice(0, -1).join(' ');
        const userEmail = parts[parts.length - 1];
        setName(userName);
        setEmail(userEmail);
        addMessage('bot', "And if you don't mind — what kind of website or service are you looking for?");
        gtag('event', 'chat_widget_email_collected', {
          event_category: 'ChatWidget',
          event_label: 'Email captured',
          value: userEmail,
        });
        break;
      case 3:
        console.log({ name, email, project: input });
        addMessage('bot', 'Awesome, thanks! 🎉 One of our developers will reach out to you shortly.');
        addMessage('bot', 'You can also reach us directly at wise11jeff@gmail.com if you prefer!');
        setShowContactLink(true); // 👈 Show the CTA button
        gtag('event', 'chat_widget_project_details', {
          event_category: 'ChatWidget',
          event_label: 'Project info submitted',
          value: input,
        });
        break;
      default:
        break;
    }

    setInput('');
    setStep((prev) => prev + 1);
  };

  const toggle = () => {
    setIsOpen((o) => {
      const next = !o;
      if (next) {
        gtag('event', 'chat_widget_opened', {
          event_category: 'ChatWidget',
          event_label: 'Widget opened',
        });
      }
      return next;
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-body text-sm">
      {isOpen && (
        <div className="w-72 h-96 bg-white border border-muted rounded-lg shadow-lg flex flex-col p-4">
          <div className="flex-1 overflow-y-auto space-y-2 mb-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.from === 'bot'
                    ? 'bg-gray-100 text-left'
                    : 'bg-accent text-white text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {showContactLink && (
              <div className="mt-4 text-center">
                <a
                  href="/contact"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Contact Us 📩
                </a>
              </div>
            )}
          </div>
          {!showContactLink && (
            <div className="flex gap-2">
              <input
                className="flex-1 border border-muted rounded px-2 py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                placeholder={
                  step === 2
                    ? 'Name Email'
                    : step === 3
                    ? 'Project details'
                    : 'Type here'
                }
              />
              <button
                className="bg-primary text-white px-3 rounded"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
      <button
        onClick={toggle}
        className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}
