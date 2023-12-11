"use client";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { KarseeData } from "@/types";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../../hooks/useAddArray";
import { KarseeTable } from "./karsee-table";
import LoadingSpinner from "@/components/spinner";

const KarseeArea = () => {
  const { addArray, filterData, setFilterData } = useAddArray<KarseeData>();

  const { data }: { data: KarseeData[] | undefined } = useFetch({
    url: "/api/karsee",
    queryKey: "karsee",
  });
  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Karsee"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <KarseeTable filterData={filterData} />
    </Flex>
  );
};

export default KarseeArea;
