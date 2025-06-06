import fs from 'fs';
import path from 'path';

describe('Navbar component', () => {
  it('includes all expected navigation links', () => {
    const navbarPath = path.resolve(__dirname, '../Navbar.jsx');
    const source = fs.readFileSync(navbarPath, 'utf-8');

    const expectedLinks = [
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

    for (const label of expectedLinks) {
      expect(source).toContain(`'${label}'`);
    }
  });
});
