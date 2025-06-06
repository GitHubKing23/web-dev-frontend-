import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar.jsx';

test('navbar displays all navigation links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const links = [
    'Home',
    'Projects',
    'Services',
    'Pricing',
    'Marketplace',
    'About',
    'Blog',
    'Tools',
    'Contact',
  ];

  links.forEach((text) => {
    expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
  });
});
