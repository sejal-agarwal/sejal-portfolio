import { BentoCard } from "../BentoCard";

interface WorkCardProps {
  company: string;
  role: string;
  dates: string;
  description: string;
  bgColor?: "bg-primary" | "bg-secondary";
}

export function WorkCard({
  company,
  role,
  dates,
  description,
  bgColor = "bg-secondary",
}: WorkCardProps) {
  return (
    <BentoCard
      bgColor={bgColor}
      colSpan="col-span-1 md:col-span-6 lg:col-span-3"
      className="rounded-[20px] h-[357px] lg:h-full lg:min-h-0 p-8 flex flex-col justify-start gap-4"
    >
      {/* Company Name */}
      <h3 className="text-[25px] leading-tight font-normal tracking-wide uppercase text-black">
        {company}
      </h3>

      {/* Role & Dates Group */}
      <div className="flex flex-col gap-1">
        <h4 className="text-[20px] font-bold text-black leading-snug">
          {role}
        </h4>
        <p className="text-date-medium text-black/70">
          {dates}
        </p>
      </div>

      {/* Description */}
      <p className="text-italic-medium pt-1">
        {description}
      </p>
    </BentoCard>
  );
}
