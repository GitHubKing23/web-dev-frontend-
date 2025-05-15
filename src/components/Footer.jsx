import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 font-body">
      &copy; {year} WebMasteryPro. All rights reserved.
    </footer>
  );
}
