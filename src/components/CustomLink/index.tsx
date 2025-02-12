// libs
import Link from "next/link";

// common
import { CustomLinkProps } from "./types";

export default function CustomLink({
  children,
  isDisabled,
  href,
  className,
}: CustomLinkProps) {
  return (
    <Link
      aria-disabled={isDisabled}
      href={href}
      className={`text-center h-fit hover:bg-blue-700 aria-disabled:pointer-events-none aria-disabled:opacity-50  py-2 px-4 rounded bg-blue-500 text-white w-fit ${className}`}
    >
      {children}
    </Link>
  );
}
