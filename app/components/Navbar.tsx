"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "ABOUT", href: "/" },
    { label: "WORK", href: "#work" },
    { label: "RESEARCH", href: "#research" },
    { label: "PROJECTS", href: "#projects" },
    { label: "BLOG", href: "#blog" },
    { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to scroll to top if already on home page
    const handleLinkClick = (href: string) => {
        if (href === "/" && pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <>
            <header className="w-full px-6 pt-5 sticky top-0 z-50">
                <nav className={`w-full flex items-center justify-between bg-primary px-8 py-5 rounded-2xl transition-shadow duration-300 ${isScrolled
                        ? "shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.1)]"
                        : "shadow-sm"
                    }`}>

                    {/* Brand Logo */}
                    <Link
                        href="/"
                        onClick={() => handleLinkClick("/")}
                        className="flex items-center gap-2 text-black shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <span className="text-nav-first-name">SEJAL</span>
                        <span className="text-nav-last-name">AGARWAL</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`text-nav-link text-black ${isActive
                                        ? "active-underline-secondary font-medium"
                                        : "hover-underline-secondary"
                                        }`}
                                >
                                    <span
                                        className={`transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-60"
                                            }`}
                                    >
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden p-1 text-black focus:outline-none hover:opacity-70 transition-opacity"
                        aria-label="Open menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </nav>
            </header>

            {/* Mobile Side Drawer Panel */}

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            <aside
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-primary z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div>
                    {/* Panel Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-black/10">
                        <Link
                            href="/"
                            onClick={() => handleLinkClick("/")}
                            className="flex items-center gap-2 text-black"
                        >
                            <span className="text-nav-first-name">SEJAL</span>
                            <span className="text-nav-last-name">AGARWAL</span>
                        </Link>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 text-black hover:opacity-70 transition-opacity"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Vertical Menu Links in Mobile Drawer */}
                    <div className="flex flex-col gap-6 pt-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`text-nav-link text-black w-fit ${isActive ? "active-underline-secondary font-medium" : ""
                                        }`}
                                >
                                    <span className={isActive ? "opacity-100" : "opacity-60"}>
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="text-date-small text-black/60 pt-6 border-t border-black/10">
                    © {new Date().getFullYear()} Sejal Agarwal
                </div>
            </aside>
        </>
    );
}