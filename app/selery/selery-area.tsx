"use client";
import React from "react";
import { SeleryTable } from "./selery-table";
import { useFetch } from "../hooks/useFetch";
import { SeleryData } from "@/types";
import { FilterInput } from "@/components/FilterInput";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import LoadingSpinner from "../../components/spinner";
import { useAddToArray } from "../hooks/useAddToArray";

const SeleryArea = () => {
  const {addArray,filterData,setFilterData} = useAddToArray<SeleryData>()
  
  const { data }: { data: SeleryData[] | undefined } = useFetch({
    url: "/api/selery",
    queryKey: "selery",
  });

  if (!data) return <LoadingSpinner />;
  
  const newData = data.map((d) => d.productNumber);
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
