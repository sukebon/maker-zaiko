import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { DaimaruTable } from "@/components/DaimaruTable";
import axios from "axios";
import { parse } from "papaparse";

type csvImport = {
  品番: string;
  商品名: string;
  サイズ: string;
  在庫数: string;
  徳島在庫: string;
  外部在庫: string;
  TOTAL: string;
  受注残: string;
  予約: string;
  仕掛: string;
};

const getCsv = async () => {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const datalist = fileParser(await res.text());
  const result = datalist.map((data: csvImport) => ({
    品番: data.品番,
    商品名: data.商品名,
    サイズ: data.サイズ,
    在庫数: data.在庫数,
    徳島在庫: data.徳島在庫,
    外部在庫: data.外部在庫,
    TOTAL: data.TOTAL,
    受注残: data.受注残,
    予約: data.予約,
    仕掛: data.仕掛,
  }));
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

export default async function Tombow() {
  const data = await getCsv();
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  const catalog1 = await getCatalog("liraxh-nnw");
  const catalog2 = await getCatalog("4szieql4_v");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DaimaruTable data={data} datalist={datalist} />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
      </CatalogArea>
    </main>
  );
}
