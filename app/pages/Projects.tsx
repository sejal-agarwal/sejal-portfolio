import Image from "next/image";
import { BentoCard } from "../components/BentoCard";
import { ProjectCard } from "../components/project-components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "#",
    bgColor: "bg-secondary" as const,
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget enim faucibus, tempus risus in, aliquet neque.",
    href: "#",
    bgColor: "bg-primary" as const,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 pt-6 pb-6 flex flex-col gap-6 scroll-mt-12 lg:scroll-mt-[90px] lg:h-[calc(100svh-90px)]"
    >
      <h2 className="text-section-heading text-black shrink-0">Projects</h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:flex-1 lg:min-h-0 lg:max-h-[460px]">
        <div className="lg:col-span-5 h-[320px] lg:h-full min-h-0">
          <BentoCard
            bgColor="bg-primary"
            className="rounded-[20px] h-full p-0 relative"
          >
            <Image
              src="/hand writing.svg"
              alt="Line drawing of a hand writing with a pen"
              fill
              className="object-contain object-center"
            />
          </BentoCard>
        </div>

        <div className="lg:col-span-3 h-[320px] lg:h-full min-h-0">
          <ProjectCard {...projects[0]} />
        </div>

        <div className="lg:col-span-4 h-[320px] lg:h-full min-h-0">
          <ProjectCard {...projects[1]} />
        </div>
      </div>
    </section>
  );
}
