"use client";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { BonmaxData } from "@/types";
import { BonmaxTable } from "./bonmax-table";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "../hooks/useAddToArray";

const BonmaxArea = () => {
  const {addArray,filterData,setFilterData} = useAddToArray<BonmaxData>()

  const { data }: { data: BonmaxData[] | undefined } = useFetch({
    url: "/api/bonmax",
    queryKey: "bonmax",
  });

  if (!data) return <LoadingSpinner />;

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="bonmax"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
          allData={data}
        />
        <BonmaxTable filterData={filterData} />
      </Flex>
    </Providers>
  );
};

export default BonmaxArea;
