"use client";
import Loading from "@/app/loading";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { BonmaxData } from "@/types";
import { BonmaxTable } from "./bonmax-table";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../hooks/useAddArray";

const BonmaxArea = () => {
  const {addArray,filterData,setFilterData} = useAddArray<BonmaxData>()

  const { data }: { data: BonmaxData[] | undefined } = useFetch({
    url: "/api/bonmax",
    queryKey: "bonmax",
  });

  if (!data) return <Loading />;

  const newData = data.map((d) => d.品番);
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
