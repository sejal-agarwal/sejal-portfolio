import Image from "next/image";
import { BentoCard } from "../BentoCard";

export function IllustrationCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="col-span-1 lg:col-span-3"
      className="rounded-[20px] min-h-[476px] h-full relative overflow-hidden flex flex-col justify-center items-center p-6"
    >
      <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
        <Image
          src="/woman-on-computer.svg"
          alt="Illustration of woman working on laptop"
          fill
          priority
          className="object-contain object-center"
        />
      </div>
    </BentoCard>
  );
}