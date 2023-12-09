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
import { PrismaClient } from "@prisma/client";

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();

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

  const prisma = new PrismaClient();
  const newBody = body.map((value: any, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  return await prisma
    .$transaction(async (prisma) => {
      await prisma.selery.deleteMany();
      await Promise.all(
        newBody.map(async (data: any) => {
          await prisma.selery.create({
            data: { ...data },
          });
        })
      );
      return NextResponse.json("result", { status: 201 });
    })
    .catch((error) => {
      console.error(error);
      return NextResponse.json("失敗", { status: 409 });
    })
    .finally(() => {
      return NextResponse.json("成功", { status: 201 });
    });
}