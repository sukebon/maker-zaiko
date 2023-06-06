import { chikumaData } from "@/type";
import axios from "axios";
import { parse } from "papaparse";

const getCsv = async () => {
  const res = await axios.get<string>(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=0&single=true&output=csv"
  );
  const result = fileParser(res.data);
  return result;
};

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as chikumaData[];
};

export default async function Home({posts}:any) {
  const data = await getCsv();
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      大丸白衣
    </main>
  );
}

