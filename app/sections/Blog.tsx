import { withBasePath } from "@/lib/base-path";
import Image from "next/image";
import { BlogPostCard } from "../components/blog-components/BlogPostCard";
import { Button } from "../components/Button";
import { getBlogPosts } from "../../lib/blog";

export function Blog() {
  const blogPosts = getBlogPosts();

  return (
    <section
      id="blog"
      className="w-full px-6 pt-6 pb-4 scroll-mt-12 lg:scroll-mt-[90px] lg:h-[calc(100svh-90px)]"
    >
      <div className="w-full h-full min-h-[680px] lg:min-h-0 rounded-[20px] bg-primary p-6 lg:p-8 flex flex-col gap-6 overflow-hidden">
        <h2 className="text-section-heading shrink-0">Blog</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0">
          <div className="reveal-card lg:col-span-3 min-h-[280px] lg:min-h-0 rounded-[20px] bg-secondary relative overflow-hidden">
            <Image
              src={withBasePath("/open book.svg")}
              alt="Line drawing of an open book"
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="reveal-card lg:col-span-6 rounded-[20px] bg-secondary p-6 flex flex-col gap-4 min-h-0">
            <h3 className="text-section-subheading shrink-0">Most Recent</h3>

            <div className="grid gap-4 min-h-0">
              {blogPosts.slice(0, 2).map((post) => (
                <BlogPostCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  href={`/blog?post=${post.slug}`}
                />
              ))}
            </div>

            <Button href="/blog" className="mt-auto mx-auto max-w-[300px] shrink-0">
              Find More Blogs
            </Button>
          </div>

          <div className="reveal-card lg:col-span-3 min-h-[280px] lg:min-h-0 rounded-[20px] bg-secondary relative overflow-hidden">
            <Image
              src={withBasePath("/plant.svg")}
              alt="Line drawing of a leafy plant"
              fill
              className="object-contain object-center p-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
