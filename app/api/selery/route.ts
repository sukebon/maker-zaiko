import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { SeleryData } from "@/types";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const newBody = body.map((value: SeleryData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(),"yyyy/MM/dd HH:mm:ss")
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