"use client"
import { useGetDaimaru } from "@/app/hooks/useGetDaimaru";
import Loading from "@/app/loading";
import { DaimaruTable } from "@/app/daimaru/components/DaimaruTable";
import React from "react";

const DaimaruArea = () => {
  const { data } = useGetDaimaru();
  if(!data) return <Loading/>
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <DaimaruTable data={data} datalist={datalist} />;
};

export default DaimaruArea;
