export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
}


import { NextRequest, NextResponse } from "next/server";
import { ServoData } from "@/types";
import { prisma } from "@/libs/prisma";

export async function GET(req: NextRequest) {
  const data = await prisma.servo.findMany({
    orderBy: {
      row: "asc",
    },
  });

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const newBody = body.map((value: any, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  await prisma.servo.deleteMany();
  return await Promise.all(
    newBody.map(async (item: ServoData) => {
      await prisma.servo.create({
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



// import { ServoData } from "@/types";
// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";
// import { parse } from "papaparse";

// const fileParser = (csvData: string) => {
//   const result = parse(csvData, { header: true });
//   return result.data as any[];
// };

// export async function GET(req: NextRequest) {
//   const url =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyLWlLD4SzvtlsqjWl7ilXLDFo3bNxm2hltR8fw1K3A-4X4OgJGhlL5FI7ey9vJuOhcJUohvZpgNj0/pub?gid=1210182439&single=true&output=csv";
//   const res = await axios.get(url);
//   const dataList = fileParser(await res.data);
//   const result = dataList.map((data) => {
//     return {
//       ...data,
//       品番: data["商品コード"],
//     };
//   });
//   return NextResponse.json(result, { status: 200 });
// }
