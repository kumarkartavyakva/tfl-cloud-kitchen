const fs = require("fs");
const path = require("path");

function readLegacyBody(fileName) {
  const filePath = path.join(process.cwd(), fileName);
  const html = fs.readFileSync(filePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  return body
    .replace(/<!-- Shared DB module[\s\S]*?<\/script>\s*/i, "")
    .replace(/<!-- Service Worker Registration -->[\s\S]*?<\/script>\s*/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}

module.exports = { readLegacyBody };
