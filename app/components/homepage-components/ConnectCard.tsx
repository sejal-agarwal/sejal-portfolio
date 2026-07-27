import { BentoCard } from "../BentoCard";
import { Button } from "../Button";

export function ConnectCard() {
    return (
        <BentoCard
            bgColor="bg-secondary"
            colSpan="w-full"
            className="rounded-[20px] h-[351px] pt-[37px] pb-[28px] px-[24px] flex flex-col justify-between"
        >
            <div>
                <h2 className="text-[55px] font-medium leading-[1.05] tracking-tight text-black">
                    Want to <br /> connect?
                </h2>
            </div>
            <div>
                <Button href="#contact">CONTACT ME</Button>
            </div>
        </BentoCard>
    );
}