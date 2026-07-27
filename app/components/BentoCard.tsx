import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  bgColor?: string;
  colSpan?: string;
  rowSpan?: string;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  bgColor = "bg-primary",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  className = "",
}) => {
  return (
    <div
      className={`rounded-3xl p-6 lg:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${bgColor} ${colSpan} ${rowSpan} ${className}`}
    >
      {children}
    </div>
  );
};