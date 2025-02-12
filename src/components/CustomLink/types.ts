import { ReactNode } from "react";

export type CustomLinkProps = {
  href: string;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
};
