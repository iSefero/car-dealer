// common
import { PageLoadingProps } from "./types";

export default function PageLoading({ children, className }: PageLoadingProps) {
  return (
    <div
      className={`min-h-screen bg-gray-100 flex justify-center items-center w-full ${className}`}
    >
      {children}
    </div>
  );
}
