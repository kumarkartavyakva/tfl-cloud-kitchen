import fs from "fs";
import path from "path";

export function readLegacyBody(fileName: string): string {
  const filePath = path.join(process.cwd(), fileName);
  const html = fs.readFileSync(filePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  return body
    .replace(/<!-- Shared DB module[\s\S]*?<\/script>\s*/i, "")
    .replace(/<!-- Service Worker Registration -->[\s\S]*?<\/script>\s*/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}
