import axios from "axios";
import { NextResponse } from "next/server";
import { parse } from "papaparse";

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data;
};

export async function GET() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=648091428&single=true&output=csv";
  const res = await axios.get(url);
  const dataList = fileParser(await res.data);
  const result = dataList.map((data: any) => {
    const pattern = /(【|】|\d)/g;
    const color = data["カラー名称"].replace(pattern, "");
    return {
      ...data,
      品番: data["品番"] + "-" + data["カラー"],
      カラー名称: color,
    };
  });
  return NextResponse.json(result, { status: 200 });
}
