import Image from "next/image";
import { BentoCard } from "../components/BentoCard";
import {
  ProjectCard,
  type ProjectCardProps,
} from "../components/project-components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Otter",
    description:
      "A RAG-powered study workspace and instructor dashboard built with Next.js, PostgreSQL, and REST APIs, featuring role-based experiences, anonymized usage analytics, and automated weekly summaries.",
    href: "https://github.com/sejal-agarwal/otter",
    bgColor: "bg-secondary" as const,
  },
  {
    title: "Martletplace",
    description:
      "A full-stack community marketplace for UVic students, designed and shipped by a 14-person engineering team that I led as technical project lead.",
    href: "https://github.com/UVicMartletplace/martletplace",
    bgColor: "bg-primary" as const,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 pt-6 pb-2 flex flex-col gap-6 scroll-mt-12 lg:scroll-mt-[90px] lg:h-[60svh] lg:min-h-[500px]"
    >
      <h2 className="text-section-heading text-black shrink-0">Projects</h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:flex-1 lg:min-h-0">
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
