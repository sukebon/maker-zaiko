export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
}

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