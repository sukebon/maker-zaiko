import { prisma } from "@/libs/prisma";
import { ChikumaData } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body } = await req.json();

  const newBody = body.map((value: ChikumaData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value?.productNumber?.trim(),
  }));

  await prisma.chikuma.deleteMany();
  return await Promise.all(
    newBody.map(async (data: ChikumaData) => {
      await prisma.chikuma.create({
        data: { ...data },
      });
    })
  )
    .then(async () => {
      console.log("成功");
      await prisma.$disconnect();
      return NextResponse.json("result", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("失敗", { status: 500 });
    });
}
