# content/blog

**Generated mirror — do not edit these files here.**

This directory is synced automatically from the `blog/` folder of the Obsidian vault
(`ftbhabuk/obsidian-vault`) by `.github/workflows/publish-to-site.yml`. The next sync
overwrites anything changed here.

## How publishing works

1. Write or move a note into `blog/` in the Obsidian vault.
2. Add frontmatter:

   ```yaml
   ---
   title: My Post                   # optional if the note starts with "# My Post"
   excerpt: One line for cards/SEO  # optional, falls back to the first paragraph
   date: 2026-10-21                 # required, YYYY-MM-DD
   category: tech & truth           # optional, defaults to "blog"
   tags: [linux, arch]              # optional
   image: /images/hero.png          # optional hero image (lives in public/images)
   draft: true                      # optional, keeps the post out of the build
   ---
   ```

3. Commit and sync in Obsidian (Obsidian Git hotkey).
4. GitHub copies the note into this folder, Vercel rebuilds, post is live.

Notes in `blog/_drafts/` are never synced. Images pasted into a note land in
`blog/attachments/` and are served from `/blog/attachments/...` automatically.

To preview locally, copy a note into this folder and run `npm run dev`.
