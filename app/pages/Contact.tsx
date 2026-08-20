import Image from "next/image";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:",
    icon: "/email.svg",
    iconSize: 28,
  },
  {
    label: "GitHub",
    href: "https://github.com/sejal-agarwal",
    icon: "/github.svg",
    iconSize: 27,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sejal-agarwal21/",
    icon: "/linkedin.svg",
    iconSize: 32,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: "/paper-clip.svg",
    iconSize: 28,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-secondary px-8 lg:px-16 py-7 lg:h-[220px] shrink-0 scroll-mt-12 lg:scroll-mt-[90px]"
    >
      <h2 className="text-section-heading">Contact</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-7 lg:flex lg:items-center lg:justify-between">
        {contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
            className="reveal-card group flex items-center gap-2 w-fit text-section-subheading hover-underline-primary"
          >
            <Image
              src={link.icon}
              alt=""
              width={link.iconSize}
              height={link.iconSize}
              className="object-contain"
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
