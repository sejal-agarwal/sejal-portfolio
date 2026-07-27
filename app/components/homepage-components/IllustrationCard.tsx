import Image from "next/image";
import { BentoCard } from "../BentoCard";

export function IllustrationCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="col-span-1 lg:col-span-3"
      className="rounded-[20px] h-[476px] relative overflow-hidden flex flex-col justify-end"
    >
      <div className="absolute bottom-12 inset-x-0 w-full h-[351px]">
        <Image
          src="/woman-on-computer.svg"
          alt="Illustration of woman working on laptop"
          fill
          priority
          className="object-contain object-bottom w-full"
        />
      </div>
    </BentoCard>
  );
}