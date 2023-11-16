import axios from "axios";
import { NextResponse } from "next/server";
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

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as csvImport[];
};
export async function GET() {
  const res = await axios.get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"
  );

  const datalist = fileParser(await res.data);
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
  return NextResponse.json(result, { status: 200 });
}
