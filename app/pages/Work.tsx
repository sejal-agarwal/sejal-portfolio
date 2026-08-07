import { WorkCard } from "../components/work-components/WorkCard";
import { WorkIllustrationCard } from "../components/work-components/WorkIllustrationcard";


const workExperience = [
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-secondary" as const,
  },
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-primary" as const,
  },
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-secondary" as const,
  },
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-primary" as const,
  },
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-secondary" as const,
  },
  {
    company: "OUTSCHOOL",
    role: "Software Engineer Co-op",
    dates: "September 2024 - December 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement.",
    bgColor: "bg-primary" as const,
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

        {workExperience.slice(2, 6).map((exp, idx) => (
          <div key={idx} className="lg:col-span-3 w-full lg:h-full min-h-0">
            <WorkCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
}
