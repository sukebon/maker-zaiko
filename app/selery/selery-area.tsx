"use client";
import React, { useState } from "react";
import Loading from "../loading";
import { SeleryTable } from "./selery-table";
import { useFetch } from "../hooks/useFetch";
import { SeleryData } from "@/types";
import { FilterInput } from "@/components/FilterInput";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { useAddArray } from "../hooks/useAddArray";

const SeleryArea = () => {
  const {addArray,filterData,setFilterData} = useAddArray<SeleryData>()
  
  const { data }: { data: SeleryData[] | undefined } = useFetch({
    url: "/api/selery",
    queryKey: "selery",
  });

  if (!data) return <Loading />;
  
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="Selery / ifory / SKITTO"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
          allData={data}
        />
        <SeleryTable filterData={filterData} />
      </Flex>
    </Providers>
  );
};

export default SeleryArea;
