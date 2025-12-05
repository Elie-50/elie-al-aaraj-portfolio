import type { ReactNode } from "react"
import { cn } from "../lib/utils";

type Props = {
    children: ReactNode;
    extraStyles: string;
};

const TechStackIcon = ({ children, extraStyles }: Props) => {
  return (
    <span className={cn("tech-badge flex items-center gap-2 px-3 py-1 rounded-full text-sm", extraStyles)}>
      {children}
    </span>
  )
}

export default TechStackIcon
