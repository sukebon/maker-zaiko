import { ChikumaData } from "@/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as ChikumaData[];
};

export async function GET(req: NextRequest) {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=0&single=true&output=csv";
  const res = await axios.get(url);
  const data = fileParser(await res.data);
  return NextResponse.json(data, { status: 200 });
}