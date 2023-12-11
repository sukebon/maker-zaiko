// import { ChikumaData } from "@/types";
// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";
// import { parse } from "papaparse";

// const fileParser = (csvData: string) => {
//   const result = parse(csvData, { header: true });
//   return result.data as ChikumaData[];
// };

// export async function GET(req: NextRequest) {
//   const url =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=642061026&single=true&output=csv";
//   const res = await axios.get(url);
//   const data = fileParser(await res.data);
//   return NextResponse.json(data, { status: 200 });
// }

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { SeleryData } from "@/types";

export async function GET(req: NextRequest) {

  const data = await prisma.selery.findMany({
    orderBy: {
      row: "asc",
    },
  });

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { body } = await req.json();
console.log(body)
  const newBody = body.map((value: any, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  await prisma.selery.deleteMany();
  return await Promise.all(
    newBody.map(async (item: SeleryData) => {
      await prisma.selery.create({
        data: item,
      });
    })
  ).then(async () => {
    console.log("成功");
    await prisma.$disconnect();
    return NextResponse.json("成功しました", { status: 201 });
  }).catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    return NextResponse.json("失敗しました", { status: 500 });
  });
}