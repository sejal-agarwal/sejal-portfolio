import Image from "next/image";
import { BlogPostCard } from "../components/blog-components/BlogPostCard";
import { Button } from "../components/Button";

const blogPosts = [
  {
    title: "Blog 1",
    date: "June 2026",
    description:
      "First author paper on facilitating the building of user interfaces with AI chatbots using guided questioning.",
    href: "#",
  },
  {
    title: "Blog 1",
    date: "June 2026",
    description:
      "First author paper on facilitating the building of user interfaces with AI chatbots using guided questioning.",
    href: "#",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="w-full px-6 pt-6 pb-4 flex-1 min-h-0 scroll-mt-12 lg:scroll-mt-[90px]"
    >
      <div className="w-full h-full min-h-[680px] lg:min-h-0 rounded-[20px] bg-primary p-6 lg:p-8 flex flex-col gap-6 overflow-hidden">
        <h2 className="text-section-heading shrink-0">Blog</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0">
          <div className="lg:col-span-3 min-h-[280px] lg:min-h-0 rounded-[20px] bg-secondary relative overflow-hidden">
            <Image
              src="/open book.svg"
              alt="Line drawing of an open book"
              fill
              className="object-contain object-center"
            />
          </div>

          <div className="lg:col-span-6 rounded-[20px] bg-secondary p-6 flex flex-col gap-4 min-h-0">
            <h3 className="text-section-subheading shrink-0">Most Recent</h3>

            <div className="grid gap-4 min-h-0">
              {blogPosts.map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </div>

            <Button href="#" className="mt-auto mx-auto max-w-[300px] shrink-0">
              Find More Blogs
            </Button>
          </div>

          <div className="lg:col-span-3 min-h-[280px] lg:min-h-0 rounded-[20px] bg-secondary relative overflow-hidden">
            <Image
              src="/plant.svg"
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
