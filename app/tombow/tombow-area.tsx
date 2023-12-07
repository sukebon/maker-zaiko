"use client";
import { useFetch } from "@/app/hooks/useFetch";
import Loading from "@/app/loading";
import { TomboTable } from "@/app/tombow/tombo-table";
import { TombowData } from "@/types";
import React from "react";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../hooks/useAddArray";

const TombowArea = () => {
  const {addArray,filterData,setFilterData} = useAddArray<TombowData>()
  
  const { data }: { data: TombowData[] | undefined } = useFetch({
    url: "/api/tombow",
    queryKey: "tombow",
  });
  if (!data) return <Loading />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="KIRAKU"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
          allData={data}
        />
        <TomboTable filterData={filterData} />
      </Flex>
    </Providers>
  );
};

export default TombowArea;
