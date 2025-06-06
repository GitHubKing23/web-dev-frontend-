const fs = require('fs');
const path = require('path');
const assert = require('node:assert');
const test = require('node:test');

test('Navbar includes all expected links', () => {
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
    assert.ok(source.includes(`'${label}'`));
  }
});
