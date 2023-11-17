"use client";
import Loading from "@/app/loading";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { BonmaxData } from "@/types";
import { BonmaxTable } from "./bonmax-table";

const BonmaxArea = () => {
  const { data }: { data: BonmaxData[] | undefined } = useFetch({
    url: "/api/bonmax",
    queryKey: "bonmax",
  });

  if (!data) return <Loading />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  return <BonmaxTable data={data} datalist={datalist} />;
};

export default BonmaxArea;
