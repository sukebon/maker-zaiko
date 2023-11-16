"use client";
import Loading from "@/app/loading";
import { ChikumaTable } from "@/app/chikuma/components/ChikumaTable";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { ChikumaData } from "@/types";

const ChikumaArea = () => {
  const { data }: { data: ChikumaData[] | undefined } = useFetch({
    url: "/api/chikuma",
    queryKey: "chkuma",
  });

  if (!data) return <Loading />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <ChikumaTable data={data} datalist={datalist} />;
};

export default ChikumaArea;
