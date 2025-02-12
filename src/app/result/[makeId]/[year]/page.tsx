// react
import { Suspense } from "react";

// libs
import axios from "axios";

// common
import ResultView from "@/views/result";
import { PageLoading } from "@/components/Loaders";
import { fetchYears } from "@/utils/helpers";
import { fetchMakes } from "@/app/calls";

// ==============================
// Possible issue: Maximum call stack size exceeded
// This solution leads to the error. Maybe I didn't understand the task condition correctly,
// but it was late at night to ask someone.
// ==============================

// export async function generateStaticParams() {
// 	const makes = await fetchMakes();
// 	const years = fetchYears();

// 	return makes.flatMap((make: { MakeId: string }) =>
// 		years.map((year: number) => ({
// 			makeId: make.MakeId,
// 			year: year.toString(),
// 		}))
// 	);
// }

async function fetchModels(makeId: string, year: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  return res.data.Results || [];
}

export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;
  const models = await fetchModels(makeId, year);

  return (
    <Suspense fallback={<PageLoading>Loading models...</PageLoading>}>
      <ResultView models={models} />
    </Suspense>
  );
}
