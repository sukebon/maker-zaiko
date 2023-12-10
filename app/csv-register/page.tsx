import React from "react";
import CsvRegisterArea from "./csv-register-area";
import { PrismaClient } from "@prisma/client";

const CsvRegisterPage = async () => {

  const prisma = new PrismaClient();

  const getData = async () => {
    const data = await prisma.selery.findMany();
    return data;
  };
  const data = await getData();

  if (!data) return;

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <CsvRegisterArea data={data} />
    </div>
  );
};

export default CsvRegisterPage;
