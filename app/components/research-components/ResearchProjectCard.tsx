import Link from "next/link";

export interface ResearchProjectCardProps {
  title: string;
  authors: string;
  date: string;
  venue?: string;
  href?: string;
}

export function ResearchProjectCard({
  title,
  authors,
  date,
  venue,
  href = "#",
}: ResearchProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} PDF`}
      className="reveal-card group relative isolate w-[190px] h-[270px] lg:w-[200px] lg:h-full lg:max-h-[270px] shrink-0 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-20 translate-x-2 translate-y-2 rotate-2 bg-white/55 border border-black/10"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 -translate-x-1 translate-y-1 -rotate-1 bg-white/80 border border-black/10"
      />

      <article className="relative h-full bg-white border border-black/10 p-4 shadow-sm overflow-hidden">
        <span className="absolute right-4 top-3 text-[28px] leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>

        <div className="mt-7 flex flex-col gap-3">
          <h3 className="text-[15px] lg:text-[clamp(13px,0.9vw,16px)] font-bold leading-[1.15] pr-2">
            {title}
          </h3>

          {venue && (
            <p className="text-[11px] lg:text-[12px] font-normal italic leading-[1.2]">
              {venue}
            </p>
          )}

          <p className="text-[11px] lg:text-[12px] leading-[1.25] text-black/55">
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
