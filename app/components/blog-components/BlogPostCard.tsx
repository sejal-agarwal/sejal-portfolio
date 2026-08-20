import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  date: string;
  description: string;
  href: string;
}

export function BlogPostCard({
  title,
  date,
  description,
  href,
}: BlogPostCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-[20px] bg-primary px-7 py-5 transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="absolute right-5 top-3 text-[28px] leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
      <h3 className="text-bold-subheading pr-10">{title}</h3>
      <p className="dates-subheading mt-1 text-black/50">{date}</p>
      <p className="text-italic-small mt-1 pr-8 leading-snug">
        {description}{" "}
      </p>
    </Link>
  );
}
