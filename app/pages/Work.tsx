import { WorkCard, type WorkCardProps } from "../components/work-components/WorkCard";
import { WorkIllustrationCard } from "../components/work-components/WorkIllustrationcard";


const workExperience: WorkCardProps[] = [
  {
    company: "Outschool",
    role: "Software Engineer Intern",
    dates: "January - April 2024, September - December 2024",
    description:
      "Designed and shipped A/B-tested onboarding experiences that increased new-buyer engagement and sign-ups by 25%.",
    bgColor: "bg-secondary" as const,
  },
  {
    company: "Open Ocean Robotics",
    role: "Software Engineer Co-op",
    dates: "May - August 2023",
    description:
      "Migrated a 60,000 LOC from JavaScript to TypeScript and built a responsive image carousel which reduced live-streaming costs by 20%.",
    bgColor: "bg-primary" as const,
  },
  {
    company: "Respondent",
    role: "Software Engineer Intern",
    dates: "September - December 2022",
    description:
      "Refactored 20% of an Angular application, removed legacy front-end code, shipped five user-facing features, and improved reliability through automated testing.",
    bgColor: "bg-secondary" as const,
  },
  {
    company: "19LABS",
    role: "Full-Stack Developer Co-op",
    dates: "January - April 2022",
    description:
      "Improved the GALE telehealth platform by simplifying seven permission roles into four, redesigning authentication flows, and integrating Bluetooth medical-device data.",
    bgColor: "bg-primary" as const,
  },
  {
    company: "HIGHWAY THREE SOLUTIONS",
    role: "Junior Technical Analyst",
    dates: "May - August 2021",
    description:
      "Researched and tested Atlassian Server-to-Cloud migration journeys, translated findings into technical blog posts, and partnered across engineering, consulting, and marketing.",
    bgColor: "bg-secondary" as const,
  },
];

export function Work() {
  return (
    <section 
      id="work" 
      className="w-full flex flex-col gap-5 pt-16 lg:pt-6 px-6 scroll-mt-12 lg:scroll-mt-[90px] lg:h-[calc(100svh-90px)]"
    >
      <h2 className="text-section-heading text-black">Work</h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-5 lg:flex-1 lg:min-h-0">
        {/* Laptop Illustration */}
        <div className="lg:col-span-6 w-full lg:h-full min-h-0">
          <WorkIllustrationCard />
        </div>

        <div className="lg:col-span-3 w-full lg:h-full min-h-0">
          <WorkCard {...workExperience[0]} />
        </div>
        <div className="lg:col-span-3 w-full lg:h-full min-h-0">
          <WorkCard {...workExperience[1]} />
        </div>

        {workExperience.slice(2).map((exp, idx, remainingExperience) => (
          <div
            key={exp.company}
            className={`${idx === remainingExperience.length - 1 ? "lg:col-span-6" : "lg:col-span-3"} w-full lg:h-full min-h-0`}
          >
            <WorkCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
}
