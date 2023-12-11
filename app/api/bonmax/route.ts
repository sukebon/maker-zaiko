import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { BonmaxData } from "@/types";

export async function GET(req: NextRequest) {
  const data = await prisma.bonmax.findMany({
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

  await prisma.bonmax.deleteMany();
  return await Promise.all(
    newBody.map(async (data: BonmaxData) => {
      await prisma.bonmax.create({
        data: { ...data },
      });
    })
  ).then(async () => {
    console.log("成功");
    await prisma.$disconnect();
    return NextResponse.json("result", { status: 201 });
  }).catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    return NextResponse.json("失敗", { status: 500 });
  });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
}

