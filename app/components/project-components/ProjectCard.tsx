import { BentoCard } from "../BentoCard";
import { Button } from "../Button";

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  bgColor?: "bg-primary" | "bg-secondary";
}

export function ProjectCard({
  title,
  description,
  href,
  bgColor = "bg-primary",
}: ProjectCardProps) {
  return (
    <BentoCard
      bgColor={bgColor}
      className="rounded-[20px] h-full min-h-[300px] lg:min-h-0 p-6 flex flex-col"
    >
      <div>
        <h3 className="text-section-subheading">{title}</h3>
        <p className="mt-7 text-italic-medium leading-[1.35]">
          {description}
        </p>
      </div>

      <Button href={href} className="mt-8 shrink-0">
        Learn More
      </Button>
    </BentoCard>
  );
}
