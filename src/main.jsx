import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// ✅ Initialize AOS when the app mounts
AOS.init({
  duration: 800,   // animation duration in ms
  once: true,      // animate only once while scrolling down
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
