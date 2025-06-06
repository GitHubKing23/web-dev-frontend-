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

    const expectedLinks = [
      'Home',
      'Projects',
      'Services',
      'Pricing',
      'About',
      'Blog',
      'Tools',
      'Contact',
      'Marketplace' // ✅ Only include this if your Navbar component includes it
    ];

    for (const label of expectedLinks) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
