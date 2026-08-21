import type { Metadata } from "next";
import { getBlogPosts } from "../../lib/blog";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | Sejal Agarwal",
  description: "Writing about HCI, AI, engineering, and design.",
};

interface BlogPageProps {
  searchParams: Promise<{ post?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { post } = await searchParams;
  const posts = getBlogPosts();

  return (
    <BlogPageContent posts={posts} initialSlug={post} />
  );
}
