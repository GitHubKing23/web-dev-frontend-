import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar.jsx';

describe('Navbar component', () => {
  it('renders primary navigation items', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const expectedTexts = ['WebMasteryPro', 'Services', 'Resources', 'Company', 'Book a Call'];
    for (const text of expectedTexts) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});

