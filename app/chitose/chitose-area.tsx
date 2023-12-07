"use client";
import { useFetch } from "@/app/hooks/useFetch";
import { ChitoseData } from "@/types";
import React from "react";
import { ChitoseTable } from "./chitose-table";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../hooks/useAddArray";
import LoadingSpinner from "@/components/spinner";

const ChitoseArea = () => {
  const {addArray,filterData,setFilterData} = useAddArray<ChitoseData>()
  const { data }: { data: ChitoseData[] | undefined } = useFetch({
    url: "/api/chitose",
    queryKey: "chitose",
  });
  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="UNITE / Arbe"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
          allData={data}
        />
        <ChitoseTable filterData={filterData} />
      </Flex>
    </Providers>
  );
};

export default ChitoseArea;
