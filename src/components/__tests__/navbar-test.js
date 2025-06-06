import fs from 'fs';
import assert from 'assert';

const source = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
const expected = [
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

for (const name of expected) {
  assert(source.includes(`'${name}'`), `Missing link ${name}`);
}

console.log('Navbar links test passed');
