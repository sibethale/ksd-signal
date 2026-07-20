/* Mirrors the canonical PWA assets into www/ so Capacitor can bundle them.
   Keeps index.html at the repo root deployable as a plain hosted PWA too. */
import { mkdir, copyFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const www = join(root, 'www');
const ASSETS = ['index.html', 'rook.lore.js', 'manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png'];

await rm(www, { recursive: true, force: true });
await mkdir(www, { recursive: true });
for (const f of ASSETS) {
  await copyFile(join(root, f), join(www, f));
}
console.log(`Copied ${ASSETS.length} assets into www/`);
