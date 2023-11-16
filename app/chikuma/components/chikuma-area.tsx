"use client";
import { useGetChikuma } from "@/app/hooks/useGetChikuma";
import Loading from "@/app/loading";
import { ChikumaTable } from "@/components/ChikumaTable";
import React from "react";

const ChikumaArea = () => {
  const { data, isError } = useGetChikuma();

  if(!data) return <Loading/>
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <ChikumaTable data={data} datalist={datalist} />;
};

export default ChikumaArea;
