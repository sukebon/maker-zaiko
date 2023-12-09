import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();

  const data = await prisma.servo.findMany({
    orderBy: {
      row: "asc",
    },
  });

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { body } = await req.json();

  const prisma = new PrismaClient();
  const newBody = body.map((value: any, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));
  try {
    await prisma.servo.deleteMany();
    await Promise.all(
      newBody.map(async (data: any) => {
        await prisma.servo.create({
          data: { ...data },
        });
      })
    );
    return NextResponse.json("result", { status: 201 });
  } catch (err) {
    console.error(err)
    return NextResponse.json("result", { status: 409 });
}
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
