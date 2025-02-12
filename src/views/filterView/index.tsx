"use client";
// react
import { useEffect, useState } from "react";

// libs
import axios from "axios";

// common
import { Select, CustomLink } from "@/components";
import { MakeType } from "@/models/types";
import { fetchYears } from "@/utils/helpers";

export default function FilterView() {
  const [makes, setMakes] = useState<Array<MakeType>>([]);

  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
      )
      .then((data) => setMakes(data.data.Results || []))
      .catch((err) => {
        console.error("Failed to fetch makes:", err);
        setError("Failed to load car brands. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  const brandOptions = makes.map((item) => ({
    value: item.MakeId,
    label: item.MakeName,
  }));

  const yearOptions = fetchYears().map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <div className="w-full space-y-4 max-w-md">
      {error && (
        <div className="text-red-500 rounded-md p-2 bg-red-200/30">{error}</div>
      )}
      <Select
        onChange={setSelectedMake}
        value={selectedMake}
        options={brandOptions}
        label="Car brand"
        required
        optionsIsLoading={loading}
      />
      <Select
        onChange={setSelectedYear}
        value={selectedYear}
        options={yearOptions}
        label="Year"
        required
      />
      <div className="flex justify-end">
        <CustomLink
          isDisabled={!(selectedMake && selectedYear)}
          href={`/result/${selectedMake}/${selectedYear}`}
        >
          Next
        </CustomLink>
      </div>
    </div>
  );
}
