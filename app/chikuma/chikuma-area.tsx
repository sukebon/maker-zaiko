"use client";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { ChikumaData } from "@/types";
import { ChikumaTable } from "./chikuma-table";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../../hooks/useAddArray";
import LoadingSpinner from "@/components/spinner";

const ChikumaArea = () => {
  const { addArray, filterData, setFilterData } = useAddArray<ChikumaData>();

  const { data }: { data: ChikumaData[] | undefined } = useFetch({
    url: "/api/chikuma",
    queryKey: "chkuma",
  });

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="ALPHA PIER / FELLOWS"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <ChikumaTable filterData={filterData} />
    </Flex>
  );
};

export default ChikumaArea;
