import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: false });
  return result.data as any[];
};

export async function GET(req: NextRequest) {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=896842304&single=true&output=csv";
  const res = await axios.get(url);
  const datalist = fileParser(await res.data);
  const result = datalist.map((data) => ({
    JANコード: Number(data[0]),
    品番:data[1]+"-"+data[3],
    品名:data[2],
    色名:data[4],
    サイズ: data[5],
    在庫数: data[7],
    入荷予定:data[8],
    外部倉庫:data[9],
    入荷日:data[10],
    調達日:data[11],
  }));
  return NextResponse.json(result, { status: 200 });
}