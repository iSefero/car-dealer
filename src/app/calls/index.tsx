import axios from "axios";

export async function fetchMakes() {
  const res = await axios.get(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getAllMakes?format=json",
  );
  return res.data.Results || [];
}
