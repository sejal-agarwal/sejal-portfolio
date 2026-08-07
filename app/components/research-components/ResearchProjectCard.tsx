import Link from "next/link";

interface ResearchProjectCardProps {
  title: string;
  authors: string;
  date: string;
  href?: string;
}

export function ResearchProjectCard({
  title,
  authors,
  date,
  href = "#",
}: ResearchProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={`Open ${title} PDF`}
      className="group relative isolate w-full max-w-[220px] h-[270px] lg:h-full lg:max-h-[250px] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-20 translate-x-2 translate-y-2 rotate-2 bg-white/55 border border-black/10"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 -translate-x-1 translate-y-1 -rotate-1 bg-white/80 border border-black/10"
      />

      <article className="relative h-full bg-white border border-black/10 p-5 shadow-sm overflow-hidden">
        <span className="absolute right-4 top-3 text-[28px] leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>

        <div className="mt-8 flex h-[calc(100%-2rem)] flex-col">
          <h3 className="text-[16px] lg:text-[clamp(14px,1vw,17px)] font-bold leading-[1.18] pr-2">
            {title}
          </h3>

          <p className="mt-auto pb-2 text-[12px] lg:text-[clamp(11px,0.76vw,13px)] leading-[1.3] text-black/55">
            <span className="font-semibold text-black">Sejal Agarwal.</span>{" "}
            {authors}
            <br />
            {date}
          </p>
        </div>
      </article>
    </Link>
  );
}
