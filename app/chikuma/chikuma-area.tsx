"use client";
import React, { FC } from "react";
import { ChikumaData } from "@/types";
import { ChikumaTable } from "./chikuma-table";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "@/hooks/useAddToArray";

type Props = {
  data: ChikumaData[];
};

const ChikumaArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<ChikumaData>();

  // const { data }: { data: ChikumaData[] | undefined } = useFetch({
  //   url: "/api/chikuma",
  //   queryKey: "chkuma",
  // });

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.productNumber);
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
