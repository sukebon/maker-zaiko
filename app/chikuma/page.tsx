import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { ChikumaTable } from "@/components/ChikumaTable";
import { chikumaData } from "@/type";
import axios from "axios";
import { parse } from "papaparse";

const getCsv = async () => {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=0&single=true&output=csv",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const result = fileParser(await res.text());
  return result;
};

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as chikumaData[];
};

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
      },
    }
  );
  return res.data;
};

export default async function Chikuma() {

  const data = await getCsv();
  const catalogSS = await getCatalog("easbbej1r");
  const catalogAW = await getCatalog("8twgzvvvs");
  const catalogFL = await getCatalog("1hfh1ntic");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChikumaTable data={data} />
      <CatalogArea>
        <Catalog catalogData={catalogSS} />
        <Catalog catalogData={catalogAW} />
        <Catalog catalogData={catalogFL} />
      </CatalogArea>
    </main>
  );
}


