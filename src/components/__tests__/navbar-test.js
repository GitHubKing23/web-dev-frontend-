const fs = require('fs');
const path = require('path');

describe('Navbar component', () => {
  it('includes all expected navigation links', () => {
    const navbarPath = path.resolve(__dirname, '../Navbar.jsx');
    const source = fs.readFileSync(navbarPath, 'utf-8');

    const expectedLabels = ['Services', 'Resources', 'Company', 'Book a Call'];

    for (const label of expectedLabels) {
      expect(source).toContain(label);
    }
  });
});
