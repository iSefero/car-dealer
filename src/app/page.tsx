import FilterView from "@/views/filterView";

export default function FilterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Filter Vehicles</h1>
      <FilterView />
    </div>
  );
}
