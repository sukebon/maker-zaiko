import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { TomboTable } from "@/components/TomboTable";
import axios from "axios";
import { parse } from "papaparse";

type csvImport = {
  品番: string;
  色: string;
  サイズ略称: string;
  在庫数: string;
};

const getCsv = async () => {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=1777356817&single=true&output=csv",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const datalist = fileParser(await res.text());
  const result = datalist.map(
    (data: csvImport) => ({
      品番: data.品番 + "-" + data.色,
      サイズ: data.サイズ略称,
      在庫数: data.在庫数,
    })
  );
  return result;
};

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as csvImport[];
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
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  const catalog = await getCatalog("pecptt28f");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <TomboTable data={data} datalist={datalist} />
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}
