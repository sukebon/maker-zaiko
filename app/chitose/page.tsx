import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { ChitoseTable } from "@/components/ChitoseTable";
import axios from "axios";
import { parse } from "papaparse";

type csvImport = {
  品番: string;
  品名: string;
  カラー名: string;
  サイズ名: string;
  在庫数: string;
  外部倉庫在庫数: string;
  仕掛１日付: string;
  仕掛１数量: string;
  仕掛２日付: string;
  仕掛２数量: string;
  仕掛３日付: string;
  仕掛３数量: string;
};

const getCsv = async () => {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=1044185695&single=true&output=csv",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const datalist = fileParser(await res.text());
  const result = datalist.map((data: csvImport) => ({
    品番: `${data.品番} ${data.カラー名}`,
    品名: data.品名,
    カラー名: data.カラー名,
    サイズ名: data.サイズ名,
    在庫数: data.在庫数,
    外部倉庫在庫数: data.外部倉庫在庫数,
    仕掛１日付: data.仕掛１日付,
    仕掛１数量: data.仕掛１数量,
    仕掛２日付: data.仕掛２日付,
    仕掛２数量: data.仕掛２数量,
    仕掛３日付: data.仕掛３日付,
    仕掛３数量: data.仕掛３数量,
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

export default async function Chitose() {
  const data = await getCsv();
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  const catalogUnite = await getCatalog("oxqcchhqb");
  const catalogArbe = await getCatalog("ekpj9zvfm");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChitoseTable data={data} datalist={datalist} />
      <CatalogArea>
        <Catalog catalogData={catalogUnite} />
        <Catalog catalogData={catalogArbe} />
      </CatalogArea>
    </main>
  );
}
