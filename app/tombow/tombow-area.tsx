"use client";
import { useFetch } from "@/hooks/useFetch";
import { TomboTable } from "@/app/tombow/tombo-table";
import { TombowData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../../hooks/useAddArray";
import LoadingSpinner from "@/components/spinner";

const TombowArea = () => {
  const { addArray, filterData, setFilterData } = useAddArray<TombowData>();

  const { data }: { data: TombowData[] | undefined } = useFetch({
    url: "/api/tombow",
    queryKey: "tombow",
  });

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
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
  );
};

export default TombowArea;
