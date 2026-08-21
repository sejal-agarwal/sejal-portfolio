"use client";

import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../components/Button";
import type { BlogPost } from "../../lib/blog";

interface BlogPageContentProps {
  posts: BlogPost[];
  initialSlug?: string;
}

export function BlogPageContent({ posts, initialSlug }: BlogPageContentProps) {
  const initialPost =
    posts.find((post) => post.slug === initialSlug) || posts[0];
  const [selectedSlug, setSelectedSlug] = useState(initialPost.slug);
  const selectedPost =
    posts.find((post) => post.slug === selectedSlug) || posts[0];

  return (
    <main className="px-6 py-5">
      <section className="min-h-[calc(100svh-40px)] rounded-[20px] bg-primary p-6 lg:p-8">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h1 className="text-section-heading">Blog</h1>
            <p className="mt-2 text-[18px] font-light">
              Notes on HCI, AI, engineering, and design.
            </p>
          </div>
          <Button href="/" fitContent>
            Main website
          </Button>
        </header>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <aside className="lg:col-span-4 rounded-[20px] bg-secondary p-5 lg:p-6">
            <h2 className="text-section-subheading">Posts</h2>
            <div className="mt-5 flex flex-col gap-3">
              {posts.map((post) => {
                const isSelected = post.slug === selectedPost.slug;

                return (
                  <button
                    key={post.slug}
                    type="button"
                    onClick={() => setSelectedSlug(post.slug)}
                    aria-pressed={isSelected}
                    className={`rounded-[16px] p-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-white shadow-sm"
                        : "bg-primary/65 hover:bg-primary"
                    }`}
                  >
                    <p className="text-[18px] font-bold leading-tight">
                      {post.title}
                    </p>
                    <p className="mt-2 text-date-small text-black/55">
                      {post.date}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/30 px-2.5 py-1 text-[11px] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <article className="lg:col-span-8 rounded-[20px] bg-white p-6 lg:p-10">
            <header className="border-b-2 border-secondary pb-7">
              <h2 className="text-[38px] lg:text-[52px] font-medium leading-[1.05]">
                {selectedPost.title}
              </h2>
              <p className="mt-4 text-date-medium text-black/55">
                {selectedPost.date}
              </p>
              <p className="mt-5 text-[19px] italic leading-[1.4]">
                {selectedPost.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-[12px] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="mt-8 text-[18px] font-light leading-[1.65]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-10 mb-4 text-[30px] font-medium leading-tight">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 text-[23px] font-medium leading-tight">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p className="mb-6">{children}</p>,
                  a: ({ href = "", children }) => (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="underline decoration-primary decoration-[2.5px] underline-offset-4 transition-colors duration-200 hover:decoration-secondary"
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-7 border-l-4 border-secondary pl-5 italic">
                      {children}
                    </blockquote>
                  ),
                  img: ({ src = "", alt = "" }) => (
                    <Image
                      src={typeof src === "string" ? src : ""}
                      alt={alt}
                      width={1200}
                      height={800}
                      unoptimized
                      className="my-8 h-auto w-full rounded-[20px] object-contain"
                    />
                  ),
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
