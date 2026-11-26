# ascii-sky (vendored)

Animated ASCII sky rendered on a canvas, by [unvalley](https://github.com/unvalley).

- Source: https://github.com/unvalley/ascii-sky
- License: MIT (see https://github.com/unvalley/ascii-sky/blob/main/LICENSE)

Vendored locally because the package is not published to npm. Imports were
changed from `./file.ts` to `./file` for Next.js/TypeScript 5 compatibility.

Assets are served from `public/ascii-sky/`. The React wrapper lives at
`components/ascii-sky.tsx` and maps the site's `.light` class to the sky's
`light`/`dark` themes.
