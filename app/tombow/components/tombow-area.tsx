"use client";
import { useFetch } from "@/app/hooks/useFetch";
import Loading from "@/app/loading";
import { TomboTable } from "@/app/tombow/components/tombo-table";
import { TombowData } from "@/types";
import React from "react";

const TombowArea = () => {
  const { data }: { data: TombowData[] | undefined } = useFetch({
    url: "/api/tombow",
    queryKey: "tombow",
  });
  if (!data) return <Loading />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return <TomboTable data={data} datalist={datalist} />;
};

export default TombowArea;
