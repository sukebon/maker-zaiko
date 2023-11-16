"use client"
import Loading from "@/app/loading";
import { DaimaruTable } from "@/app/daimaru/components/DaimaruTable";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { DaimaruData } from "@/types";

const DaimaruArea = () => {
  const { data }: { data: DaimaruData[] | undefined } = useFetch({
    url: "/api/daimaru",
    queryKey: "daimaru",
  });
  if(!data) return <Loading/>
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <DaimaruTable data={data} datalist={datalist} />;
};

export default DaimaruArea;
