import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('includes all expected navigation links', () => {
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
      'Contact'
    ];

    links.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
