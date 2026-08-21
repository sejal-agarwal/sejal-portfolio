# Sejal Agarwal — Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
app/
  blog/          Blog route, reader UI, and Markdown post content
  components/    Reusable UI components and card components
  sections/      Sections composed on the portfolio homepage
  globals.css    Global theme, typography, and shared utilities
  layout.tsx     Root application layout
  page.tsx       Homepage composition
docs/
  blogging.md    Blog authoring instructions and frontmatter template
lib/
  blog.ts        Server-side Markdown loading and post sorting
public/
  blog-images/   Images embedded in blog posts
  papers/        Downloadable research papers
  pdfs/          Downloadable resume
```

## Writing blog posts

Create Markdown posts in `app/blog/content`. See [the blog authoring guide](docs/blogging.md) for the frontmatter template, formatting, links, and images.

## Checks

```bash
npm run lint
npx tsc --noEmit
```
