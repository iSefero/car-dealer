"use client";
import { Button } from "@/components";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center w-full gap-3 flex-col">
      <h2>Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
