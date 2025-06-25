import fs from 'fs';
import path from 'path';

const viteFiles = ['vite.config.js', 'index.html'];
const viteDirs = ['src', 'public'];
const backendFiles = ['index.js', '.env'];
const backendDirs = ['routes', 'controllers', 'config'];

function moveItem(item, destination) {
  const oldPath = path.join('.', item);
  const newPath = path.join(destination, item);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Moved ${item} → ${destination}`);
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`📁 Created ${dir}/`);
  }
}

// Step 1: Make frontend/ and backend/
ensureDir('frontend');
ensureDir('backend');

// Step 2: Move frontend files
viteFiles.forEach(file => moveItem(file, 'frontend'));
viteDirs.forEach(dir => moveItem(dir, 'frontend'));

// Step 3: Move backend files
backendFiles.forEach(file => moveItem(file, 'backend'));
backendDirs.forEach(dir => moveItem(dir, 'backend'));

console.log('\n🎉 Project has been reorganized into /frontend and /backend');
