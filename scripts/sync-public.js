const fs = require("fs");
const path = require("path");

const root = process.cwd();
const publicDir = path.join(root, "public");
const files = [
  "style.css",
  "customer.css",
  "admin.css",
  "db.js",
  "customer.js",
  "admin.js",
  "manifest.json",
  "service-worker.js",
  "tfl_logo.png",
  "tfl_hero.png"
];

fs.mkdirSync(publicDir, { recursive: true });

files.forEach((file) => {
  fs.copyFileSync(path.join(root, file), path.join(publicDir, file));
});
