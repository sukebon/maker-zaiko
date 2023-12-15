import { prisma } from "@/libs/prisma";
import { TombowData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body } = await req.json();

  const newBody = body.map((value: TombowData, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber?.trim(),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  await prisma.tombow.deleteMany();
  return await Promise.all(
    newBody.map(
      async (data: TombowData) =>
        await prisma.tombow.create({
          data: { ...data },
        })
    )
  )
    .then(async () => {
      console.log("トンボ 成功");
      await prisma.$disconnect();
      return NextResponse.json("result", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("失敗", { status: 500 });
    });
}
