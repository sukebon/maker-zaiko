"use client"
import { useFetch } from "@/app/hooks/useFetch";
import Loading from "@/app/loading";
import { ChitoseTable } from "@/app/chitose/components/ChitoseTable";
import { ChitoseData } from "@/types";
import React from "react";

const ChitoseArea = () => {
  const { data }: { data: ChitoseData[] | undefined } = useFetch({
    url: "/api/chitose",
    queryKey: "chitose",
  });
  if (!data) return <Loading />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <ChitoseTable data={data} datalist={datalist} />;
};

export default ChitoseArea;
