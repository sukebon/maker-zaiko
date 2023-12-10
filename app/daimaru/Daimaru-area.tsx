"use client";
import { DaimaruTable } from "@/app/daimaru/Daimaru-table";
import React from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { DaimaruData } from "@/types";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../hooks/useAddArray";
import LoadingSpinner from "@/components/spinner";

const DaimaruArea = () => {
  const { addArray, filterData, setFilterData } = useAddArray<DaimaruData>();

  const { data }: { data: DaimaruData[] | undefined; } = useFetch({
    url: "/api/daimaru",
    queryKey: "daimaru",
  });
  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="大丸白衣"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
          allData={data}
        />
        <DaimaruTable filterData={filterData} />
      </Flex>
    </Providers>
  );
};

export default DaimaruArea;
