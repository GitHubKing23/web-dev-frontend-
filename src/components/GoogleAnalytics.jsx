import { useEffect } from 'react';

export default function GoogleAnalytics({ trackingId }) {
  useEffect(() => {
    if (!trackingId) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', trackingId);

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  return null;
}
