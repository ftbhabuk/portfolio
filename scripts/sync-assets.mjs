/**
 * Mirrors non-markdown files (images, videos, PDFs...) from content/blog into
 * public/blog so they can be served statically. Runs before dev/build.
 */
import fs from "node:fs"
import path from "node:path"

const SRC = path.join(process.cwd(), "content", "blog")
const DEST = path.join(process.cwd(), "public", "blog")
const IGNORED = new Set(["_drafts", ".obsidian", ".trash"])

function copyAssets(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || IGNORED.has(entry.name)) continue

    const from = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      copyAssets(from)
      continue
    }

    if (entry.name.endsWith(".md")) continue

    const to = path.join(DEST, path.relative(SRC, from))
    fs.mkdirSync(path.dirname(to), { recursive: true })
    fs.copyFileSync(from, to)
  }
}

fs.rmSync(DEST, { recursive: true, force: true })

if (fs.existsSync(SRC)) {
  copyAssets(SRC)
  console.log(`[blog] assets synced to ${path.relative(process.cwd(), DEST)}`)
} else {
  console.warn(`[blog] no content directory at ${path.relative(process.cwd(), SRC)}`)
}
