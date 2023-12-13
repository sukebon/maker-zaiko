"use client";
import { ChitoseData } from "@/types";
import React, { FC } from "react";
import { ChitoseTable } from "./chitose-table";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "@/hooks/useAddToArray";

type Props = {
  data:ChitoseData[]
}

const ChitoseArea:FC<Props> = ({data}) => {
  const { addArray, filterData, setFilterData } = useAddToArray<ChitoseData>();
  if (!data) return <LoadingSpinner />;

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
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
  );
};

export default ChitoseArea;
