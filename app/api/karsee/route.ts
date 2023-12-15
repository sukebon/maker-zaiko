import { prisma } from "@/libs/prisma";
import { KarseeData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const pattern = /(【\d*】)/g;
  const newBody = body.map((value: KarseeData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    color:value?.color?.replace(pattern,""),
    createdAt: format(new Date(),"yyyy/MM/dd HH:mm:ss")
  }));

  await prisma.karsee.deleteMany();
  return await Promise.all(
    newBody.map(async (item: KarseeData) => {
      await prisma.karsee.create({
        data: item,
      });
    })
  ).then(async () => {
    console.log("カーシーカシマ 成功");
    await prisma.$disconnect();
    return NextResponse.json("成功しました", { status: 201 });
  }).catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    return NextResponse.json("失敗しました", { status: 500 });
  });
}
