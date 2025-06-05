const fs = require("fs");
const path = require("path");

const targetDirs = ["src/pages", "src/components"];

function hasDefaultExport(content) {
  return /export\s+default\s+/g.test(content);
}

function checkFiles(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      checkFiles(fullPath); // Recursive for subdirectories
    } else if (file.endsWith(".jsx")) {
      const content = fs.readFileSync(fullPath, "utf8");
      if (hasDefaultExport(content)) {
        console.log(`✅ Found default export: ${fullPath}`);
      } else {
        console.log(`❌ Missing default export: ${fullPath}`);
      }
    }
  });
}

targetDirs.forEach((dir) => {
  const fullDir = path.join(__dirname, dir);
  if (fs.existsSync(fullDir)) {
    checkFiles(fullDir);
  } else {
    console.warn(`⚠️ Directory not found: ${fullDir}`);
  }
});
