import Link from "next/link";
import { BentoCard } from "../BentoCard";

export function QuickLinksCard() {
    return (
        <BentoCard
            bgColor="bg-primary"
            colSpan="col-span-1"
            className="rounded-[20px] h-[101px] px-8 flex flex-row items-center justify-between"
        >
            <Link
                href="/resume.pdf"
                target="_blank"
                className="text-[15px] font-normal tracking-wide text-black hover-underline-secondary transition-all"
            >
                RESUME
            </Link>
            <Link
                href="https://github.com/sejal-agarwal"
                target="_blank"
                className="text-[15px] font-normal tracking-wide text-black hover-underline-secondary transition-all"
            >
                GITHUB
            </Link>
            <Link
                href="https://www.linkedin.com/in/sejal-agarwal21/"
                target="_blank"
                className="text-[15px] font-normal tracking-wide text-black hover-underline-secondary transition-all"
            >
                LINKEDIN
            </Link>
        </BentoCard>
    );
}