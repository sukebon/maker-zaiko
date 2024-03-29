import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { BonmaxData } from "@/types";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body } = await req.json();

  const newBody = body.map((value: BonmaxData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(),"yyyy/MM/dd HH:mm:ss")
  }));

  await prisma.bonmax.deleteMany();
  return await Promise.all(
    newBody.map(async (data: BonmaxData) => {
      await prisma.bonmax.create({
        data: { ...data },
      });
    })
  ).then(async () => {
    console.log("ボンマックス 成功");
    await prisma.$disconnect();
    return NextResponse.json("result", { status: 201 });
  }).catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    return NextResponse.json("失敗", { status: 500 });
  });
}
