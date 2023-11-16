import axios from "axios";
import { NextResponse } from "next/server";
import { parse } from "papaparse";

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as csvImport[];
};

type csvImport = {
  品番: string;
  色: string;
  サイズ略称: string;
  在庫数: string;
};

export async function GET() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=1777356817&single=true&output=csv";
  const res = await axios.get(url);
  const datalist = fileParser(await res.data);
  const result = datalist.map((data: csvImport) => ({
    品番: data.品番 + "-" + data.色,
    サイズ: data.サイズ略称,
    在庫数: data.在庫数,
  }));
  return NextResponse.json(result, { status: 200 });
}
