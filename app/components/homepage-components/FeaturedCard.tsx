import { BentoCard } from "../BentoCard";
import Image from "next/image";
import Link from "next/link";

interface FeaturedItemProps {
  title: string;
  description: string;
  date: string;
  link?: string;
}

const featuredItems: FeaturedItemProps[] = [
  {
    title: "Paper Accepted at Graphics Interface Conference '26",
    description:
      "First author paper on facilitating the building of user interfaces with AI chatbots using questions.",
    date: "June 2026",
    link: "#",
  },
  {
    title: "Paper Accepted at Graphics Interface Conference '26",
    description:
      "First author paper on facilitating the building of user interfaces with AI chatbots using questions.",
    date: "June 2026",
    link: "#",
  },
  {
    title: "Paper Accepted at Graphics Interface Conference '26",
    description:
      "First author paper on facilitating the building of user interfaces with AI chatbots using questions.",
    date: "June 2026",
  },
];

export function FeaturedCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="col-span-1"
      className="rounded-[20px] flex-1 h-full flex flex-col justify-between p-6 overflow-hidden"
    >
      <div>
        <h2 className="text-section-subheading tracking-tight">
          FEATURED
        </h2>

        <div className="flex justify-center mt-4 mb-2">
          <Image
            src="/tulip-line-drawing.svg"
            alt="Tulip line drawing"
            width={160}
            height={190}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        {featuredItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="border-t-2 border-[#F6B8B0] mb-2" />
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px] font-bold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-italic-small text-black/80 leading-snug">
                {item.description}
                {item.link && (
                  <>
                    {" "}
                    <Link
                      href={item.link}
                      className="font-semibold italic text-black hover-underline-secondary inline-block pb-[1px]"
                    >
                      Read here.
                    </Link>
                  </>
                )}
              </p>
              <span className="text-date-small text-black/50">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}