import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

const BLOG_DIRECTORY = path.join(process.cwd(), "app", "blog", "content");

export function getBlogPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(BLOG_DIRECTORY, fileName), "utf8");
      const { data, content } = matter(source);

      return {
        slug,
        title: String(data.title),
        publishedAt: String(data.publishedAt),
        date: String(data.date),
        description: String(data.description),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        content,
      };
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}
