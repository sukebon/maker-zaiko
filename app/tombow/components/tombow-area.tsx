"use client"
import { useGetTombow } from "@/app/hooks/useGetTombow";
import Loading from "@/app/loading";
import { TomboTable } from "@/components/TomboTable";
import React from "react";

const TombowArea = () => {
  const { data } = useGetTombow();
  if(!data) return <Loading/>
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));
  
  return <TomboTable data={data} datalist={datalist} />;
};

export default TombowArea;
