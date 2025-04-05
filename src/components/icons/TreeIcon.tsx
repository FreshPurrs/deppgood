import { cn } from "../../lib/utils";

interface TreeIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const TreeIcon = ({
  className,
  size = 24,
  color = "currentColor",
}: TreeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("tree-icon", className)}
    >
      <path d="M12 22v-7" />
      <path d="M9 9h6" />
      <path d="M9 15h6" />
      <path d="M5 15a3 3 0 0 0 4-4a3 3 0 0 0-2-5a3 3 0 0 0-3 3a3 3 0 0 0 1 6Z" />
      <path d="M19 15a3 3 0 0 1-4-4a3 3 0 0 1 2-5a3 3 0 0 1 3 3a3 3 0 0 1-1 6Z" />
    </svg>
  );
};

export default TreeIcon;
