import { BentoCard } from "../BentoCard";
import Image from "next/image";

export function HeroCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="lg:col-span-5"
      className="rounded-[20px] min-h-[476px] h-full p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
    >
      <div className="self-end">
        <Image
          src="/flower-line.svg"
          alt="Flower decoration"
          width={120}
          height={120}
          className="object-contain animate-[spin_25s_linear_infinite]"
        />
      </div>

      <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-semibold text-black tracking-tight mt-auto">
        Developer Building{" "}
        <span className="font-light italic">Systems</span> with{" "}
        Human-Centered Design
      </h1>
    </BentoCard>
  );
}