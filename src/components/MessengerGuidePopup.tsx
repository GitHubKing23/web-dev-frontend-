import React, { useState, useEffect, useRef } from "react";

interface Props {
  provider?: "netlify" | "formspree";
  formspreeId?: string;
  messengerUsername: string;
  messengerRef?: string;
  privacyUrl?: string;
  guideTitle?: string;
  guideBullets?: string[];
  delayMs?: number;
  scrollPercent?: number;
  cooldownDays?: number;
  onSubmitPayload?: (payload: any) => void;
  className?: string;
}

const COOLDOWN_KEY = "wmp_popup_cooldown_until";

const MessengerGuidePopup: React.FC<Props> = ({
  provider = "netlify",
  formspreeId,
  messengerUsername,
  messengerRef = "freeguide",
  privacyUrl = "/privacy",
  guideTitle = "Free Guide: 10 Website Mistakes That Cost You Sales",
  guideBullets = [
    "Avoid common design pitfalls",
    "Improve conversions with simple tweaks",
    "Boost your search visibility",
  ],
  delayMs = 8000,
  scrollPercent = 45,
  cooldownDays = 7,
  onSubmitPayload,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const shownRef = useRef(false);
  const debounceRef = useRef<number | null>(null);

  const buildMessengerUrl = () =>
    `https://m.me/${messengerUsername}?ref=${encodeURIComponent(messengerRef)}`;

  const setCooldown = () => {
    const until = Date.now() + cooldownDays * 86400000;
    try {
      window.localStorage.setItem(COOLDOWN_KEY, String(until));
    } catch {
      /* noop */
    }
  };

  const getCooldownValid = () => {
    try {
      const until = window.localStorage.getItem(COOLDOWN_KEY);
      return until ? Date.now() < Number(until) : false;
    } catch {
      return false;
    }
  };

  const show = () => {
    if (shownRef.current || getCooldownValid()) return;
    shownRef.current = true;
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    lastActiveRef.current?.focus();
    setSuccess(false);
  };

  // triggers
  useEffect(() => {
    if (getCooldownValid()) return; // skip triggers

    const handleScroll = () => {
      if (shownRef.current) return;
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrolled >= scrollPercent) show();
    };

    const handleExitIntent = (e: MouseEvent) => {
      if (shownRef.current) return;
      if (e.clientY <= 0) show();
    };

    const timer = window.setTimeout(show, delayMs);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleExitIntent);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, [delayMs, scrollPercent]);

  // focus management
  useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement as HTMLElement;
      setTimeout(() => {
        emailRef.current?.focus();
      }, 0);
    }
  }, [open]);

  // focus trap & esc
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || debounceRef.current) return;
    const email = emailRef.current?.value.trim() || "";
    const consent = consentRef.current?.checked;
    const botField = (e.target as HTMLFormElement).elements.namedItem(
      "bot-field"
    ) as HTMLInputElement | null;
    if (botField?.value) return; // honeypot
    if (!email || !consent) return;

    setLoading(true);
    setError("");
    debounceRef.current = window.setTimeout(() => {
      debounceRef.current = null;
    }, 3000);

    try {
      if (provider === "netlify") {
        const data = new FormData();
        data.append("form-name", "wmp-messenger-guide");
        data.append("email", email);
        data.append("consent", "true");
        await fetch("/", { method: "POST", body: data });
      } else {
        if (!formspreeId) throw new Error("Missing formspreeId");
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: JSON.stringify({ email, consent: true }),
        });
        if (!res.ok) throw new Error("Formspree submission failed");
      }
      const messengerUrl = buildMessengerUrl();
      window.open(messengerUrl, "_blank");
      const payload = {
        email,
        provider,
        messengerUsername,
        messengerRef,
        timestamp: Date.now(),
      };
      console.log(payload);
      onSubmitPayload?.(payload);
      setCooldown();
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <>
        {provider === "netlify" && (
          <form
            name="wmp-messenger-guide"
            data-netlify="true"
            netlify-honeypot="bot-field"
            hidden
            aria-hidden="true"
            suppressHydrationWarning
          >
            <input type="email" name="email" />
            <input type="checkbox" name="consent" />
            <input name="bot-field" />
          </form>
        )}
      </>
    );
  }

  return (
    <>
      {provider === "netlify" && (
        <form
          name="wmp-messenger-guide"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
          aria-hidden="true"
          suppressHydrationWarning
        >
          <input type="email" name="email" />
          <input type="checkbox" name="consent" />
          <input name="bot-field" />
        </form>
      )}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wmp-messenger-title"
      >
        <div
          className="fixed inset-0 bg-black/50"
          onClick={close}
          aria-hidden="true"
        />
        <div
          ref={modalRef}
          className="relative z-10 w-full max-w-sm mx-4 rounded bg-white p-6 shadow-lg focus:outline-none"
        >
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          {success ? (
            <div className="space-y-4 text-center">
              <h2
                id="wmp-messenger-title"
                className="text-xl font-bold text-gray-800"
              >
                Success!
              </h2>
              <p className="text-gray-700 text-sm">
                Check your Messenger 🎉 We just sent the guide. A confirmation was
                also sent to your email.
              </p>
              <button
                onClick={close}
                className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h2
                id="wmp-messenger-title"
                className="text-xl font-bold text-gray-800"
              >
                {guideTitle}
              </h2>
              <p className="text-sm text-gray-600">
                Pop your email in—then we’ll send the PDF via Facebook Messenger so
                you get it instantly.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {guideBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div>
                <label
                  htmlFor="wmp-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="wmp-email"
                  type="email"
                  required
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="hidden">
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" />
                </label>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  ref={consentRef}
                  id="wmp-consent"
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <label htmlFor="wmp-consent" className="text-sm text-gray-700">
                  I agree to receive emails from WebMasteryPro. I can unsubscribe
                  anytime. See
                  {" "}
                  <a
                    href={privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get the Guide"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default MessengerGuidePopup;

// Example usage (Netlify):
// <MessengerGuidePopup messengerUsername="WebMasteryPro" provider="netlify" privacyUrl="/privacy" />

// Example usage (Formspree):
// <MessengerGuidePopup messengerUsername="WebMasteryPro" provider="formspree" formspreeId="YOUR_ID" />

