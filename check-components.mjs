import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 📁 Directories to check
const foldersToCheck = ['components', 'pages', 'widgets'].map(folder =>
  path.join(__dirname, 'src', folder)
);

console.log('🔍 Preflight: Checking component and page exports...\n');

let hasError = false;

// 🔍 Component export checks
for (const dir of foldersToCheck) {
  const label = path.basename(dir);

  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  Skipping missing folder: ${label}`);
    continue;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8').trim();
    const expectedName = path.parse(file).name;

    // ✅ PascalCase check
    const isPascalCase = /^[A-Z][A-Za-z0-9]*$/.test(expectedName);
    if (!isPascalCase) {
      console.warn(`⚠️  ${label}/${file} should use PascalCase (e.g. Navbar.jsx)`);
      hasError = true;
    }

    // ✅ export default check (function/class/arrow)
    const exportRegex = /^\s*export\s+default\s+(function\s+\w+|class\s+\w+|\(?\s*[\w\s,={}]*\)?\s*=>|\w+)\s*[{;(]?/m;
    if (!exportRegex.test(content)) {
      console.error(`❌ Missing or malformed export default in: ${label}/${file}`);
      hasError = true;
    } else {
      console.log(`✅ ${label}/${file} ✔`);
    }
  }
}

// 🧠 Extra: Check Home.jsx for BusinessNameGenerator import + usage
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
if (fs.existsSync(homePath)) {
  const homeContent = fs.readFileSync(homePath, 'utf-8');

  if (!homeContent.includes("import BusinessNameGenerator")) {
    console.warn(`⚠️  Missing import for BusinessNameGenerator in pages/Home.jsx`);
    hasError = true;
  }

  if (!homeContent.includes("<BusinessNameGenerator")) {
    console.warn(`⚠️  BusinessNameGenerator not rendered in JSX in pages/Home.jsx`);
    hasError = true;
  }
}

if (hasError) {
  console.log('\n❗ Preflight check failed. Please fix the issues above.\n');
  process.exit(1);
} else {
  console.log('\n✅ All component/page/widget files passed checks.\n');
}
