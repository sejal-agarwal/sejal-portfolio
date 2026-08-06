import Image from "next/image";
import { BentoCard } from "../BentoCard";

export function WorkIllustrationCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="col-span-1 md:col-span-12 lg:col-span-6"
      className="rounded-[20px] h-[357px] lg:h-full lg:min-h-0 relative overflow-hidden flex items-center justify-center p-6"
    >
      <div className="relative w-full h-full">
        <Image
          src="/laptop-vector.svg"
          alt="Illustration of laptop and mouse"
          fill
          priority
          className="object-contain object-center"
        />
      </div>
    </BentoCard>
  );
}
