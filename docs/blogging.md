# Writing blog posts

Create a new `.md` file in `app/blog/content`. The filename becomes its unique post key.

Start the file with this frontmatter:

```md
---
title: My Post Title
publishedAt: 2026-08-21
date: August 2026
description: A short summary shown in the selector and homepage card.
tags:
  - Design
  - Engineering
---
```

Write the post beneath the frontmatter using standard Markdown. Use `##` for subheadings, `[label](https://example.com)` for links, and `![description](/blog-images/example.jpg)` for images.

Place image files in `public/blog-images` so they are available at `/blog-images/filename`.
