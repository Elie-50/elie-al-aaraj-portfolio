import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  extraStyles?: string;
};

const TechStackIcon = ({ children, extraStyles }: Props) => {
  return (
    <span
      className={cn(
        `
        tech-badge
        flex items-center gap-2
        px-3 py-1.5
        rounded-full
        text-sm
        font-medium

        backdrop-blur-xl
        bg-white/30 dark:bg-black/30
        border border-gray-200/40 dark:border-white/10

        text-gray-700 dark:text-gray-300

        transition-all duration-300
        hover:scale-[1.05]
        hover:border-black/20 dark:hover:border-white/20
        hover:bg-white/50 dark:hover:bg-black/40
        `,
        extraStyles
      )}
    >
      {children}
    </span>
  );
};

export default TechStackIcon;