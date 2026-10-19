import { withBasePath } from "@/lib/base-path";
import Image from "next/image";
import {
  ResearchProjectCard,
  type ResearchProjectCardProps,
} from "../components/research-components/ResearchProjectCard";

const researchProjects: ResearchProjectCardProps[] = [
  {
    title: "Thinking Inside the Box: Building User Interfaces with Question-Guided Inputs",
    authors: "Helen Weixu Chen, Dan Vogel, Ana Crisan",
    date: "June 2026",
    venue: "Accepted to Graphics Interface Conference '26",
    href: "/papers/thinking-inside-the-box.pdf",
  },
  {
    title: "Prefill-Only Optimizations for Prefill-Decode Disaggregation in vLLM",
    authors: "Maksym Bidnyi, Joshua Caita, Gavin Deane",
    date: "December 2025",
    href: "/papers/prefill-only-optimizations.pdf",
  },
  {
    title: "Scroll or Stroll: Evaluating Scrollytelling and Free Exploration for Data Stories",
    authors: "Samiha Anuva",
    date: "December 2025",
    href: "/papers/scroll-or-stroll.pdf",
  },
];

export function Research() {
  return (
    <section
      id="research"
      className="w-full px-6 py-6 lg:pt-8 lg:pb-2 scroll-mt-12 lg:scroll-mt-[90px] lg:h-[calc(100svh-90px)]"
    >
      <div className="w-full h-full rounded-[20px] bg-primary p-6 lg:p-8 flex flex-col overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 lg:flex-[0.7] min-h-0">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-section-heading text-black">Research</h2>
            <p className="mt-5 max-w-[760px] text-[20px] font-light leading-[25px] text-black">
              My research interests lie at the intersection of human-computer
              interaction (HCI), AI, and educational technology. As a student in the
              Insight Lab, supervised by Dr. Ana Crisan, I study how AI-driven systems
              can enhance learning experiences, empower students, and support
              instructors in more effective teaching. I study how AI-driven systems
              can enhance learning experiences, empower students, and support
              instructors.
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-0">
            <Image
              src={withBasePath("/books.png")}
              alt="Line drawing of a stack of books"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="pt-7 pb-5 shrink-0">
          <div className="h-[2px] bg-black" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-[1.3] min-h-0">
          <h3 className="text-section-subheading">Research Projects</h3>

          <div className="bg-secondary rounded-[20px] p-8 lg:px-[8%] lg:py-7 flex flex-wrap items-center justify-evenly gap-8 lg:gap-5 flex-1 min-h-0">
            {researchProjects.map((project, index) => (
              <ResearchProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
