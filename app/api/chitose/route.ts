import { prisma } from "@/libs/prisma";
import { ChitoseData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import {format} from "date-fns"

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const patternProductNumber = /[^\d]/g;
  const patternColor = /(C|-|\/|\d)/g;
  const newBody = body.map((value: ChitoseData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber:
      value.productNumber +
      "-" +
      value.color?.replace(patternProductNumber, ""),
    color: value.color?.replace(patternColor, ""),
    createdAt: format(new Date(),"yyyy/MM/dd HH:mm:ss")
  }));

  await prisma.chitose.deleteMany();
  return await Promise.all(
    newBody.map(async (item: ChitoseData) => {
      await prisma.chitose.create({
        data: item,
      });
    })
  )
    .then(async () => {
      console.log("チトセ 成功");
      await prisma.$disconnect();
      return NextResponse.json("成功しました", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("失敗しました", { status: 500 });
    });
}
