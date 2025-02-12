"use client";
// libs
import { useParams } from "next/navigation";

// common
import { ModelsType } from "@/models/types";
import { CustomLink } from "@/components";

export type ResultViewProps = {
  models: Array<ModelsType>;
};

export default function ResultView({ models }: ResultViewProps) {
  const { year } = useParams<{ year: string }>();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center gap-6">
        <CustomLink href="/">Go Home</CustomLink>
        <h1 className="text-2xl font-bold text-center mb-6">
          {models[0].Make_Name} Models for {year}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models?.length ? (
          models.map((model, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              {model.Model_Name}
            </div>
          ))
        ) : (
          <p>No models found.</p>
        )}
      </div>
    </div>
  );
}
