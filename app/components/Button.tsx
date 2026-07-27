import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export function Button({ href, children, className = "" }: ButtonProps) {
    return (
        <Link
            href={href}
            className={`w-full h-[60px] bg-white rounded-[20px] flex items-center justify-center text-nav-link tracking-normal transition-shadow duration-200 hover:shadow-md ${className}`}
        >
            {children}
        </Link>
    );
}