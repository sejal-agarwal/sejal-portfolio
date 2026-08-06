import { BentoCard } from "../BentoCard";
import Image from "next/image";

export function AboutCard() {
  return (
    <BentoCard
      bgColor="bg-primary"
      colSpan="w-full"
      className="rounded-[20px] pt-[32px] pl-[24px] pb-[25px] pr-[93px] h-[351px] lg:h-full flex flex-col justify-between"
    >
      <div>
        <Image
          src="/circle-icon.svg"
          alt="Decorative icon"
          width={38}
          height={38}
          className="object-contain"
        />
      </div>
      
      <div>
        <p className="text-[20px] font-light leading-[25px] text-black">
          Hi, I&apos;m Sejal, a software engineer, HCI researcher, and UI/UX designer.
          I love blending human-centered design, research, and code to build intuitive
          digital experiences and explore how humans and AI collaborate.
        </p>
      </div>
    </BentoCard>
  );
}
