import { NextRequest, NextResponse } from "next/server";
import { ServoData } from "@/types";
import { prisma } from "@/libs/prisma";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const newBody = body.map((value: ServoData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(),"yyyy/MM/dd HH:mm:ss")
  }));

  await prisma.servo.deleteMany();
  return await Promise.all(
    newBody.map(async (item: ServoData) => {
      await prisma.servo.create({
        data: item,
      });
    })
  ).then(async () => {
    console.log("サーヴォ 成功");
    await prisma.$disconnect();
    return NextResponse.json("成功しました", { status: 201 });
  }).catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    return NextResponse.json("失敗しました", { status: 500 });
  });
}
