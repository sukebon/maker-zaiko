import {  ChitoseData } from "@/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
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
  

const fileParser = (csvData: string) => {
  const result = parse(csvData, { header: true });
  return result.data as ChitoseData[];
};

export async function GET(req: NextRequest) {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=1044185695&single=true&output=csv";
  const res = await axios.get(url);
  const datalist = fileParser(await res.data);
  const result = datalist.map((data: csvImport) => {
    const pattern = /(C|-|\/|\s)/g;
    const text = data.カラー名;
    const newText = text.replace(pattern, "");
    const array = newText.split(/[0-9]/);
    const lastText = array.pop();
    const colorText = newText.match(/[0-9]*/)?.shift();
    return {
      品番: newText !== "" ? `${data.品番}-${colorText} ${lastText}` : data.品番,
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
    };
  });
  return NextResponse.json(result, { status: 200 });
}

