import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, 'src', 'components');

console.log('🔍 Preflight: Checking component exports...\n');

let hasError = false;

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8').trim();

  const expectedName = path.parse(file).name;
  const isPascalCase = /^[A-Z][A-Za-z0-9]*$/.test(expectedName);

  if (!isPascalCase) {
    console.warn(`⚠️  Filename "${file}" should use PascalCase (e.g. Navbar.jsx)`);
    hasError = true;
  }

  // ✅ Enhanced export detection:
  const hasExport =
    /^\s*export\s+default\s+(function\s+[A-Za-z_$][\w$]*|class\s+[A-Za-z_$][\w$]*|\w+)\s*[{;(]?/m.test(content);

  if (!hasExport) {
    console.error(`❌ Missing or malformed export default in: ${file}`);
    hasError = true;
  } else {
    console.log(`✅ ${file} ✔`);
  }
}

if (hasError) {
  console.log('\n❗ Preflight check failed. Please fix the issues above.\n');
  process.exit(1);
} else {
  console.log('\n✅ All component files passed checks.\n');
}
