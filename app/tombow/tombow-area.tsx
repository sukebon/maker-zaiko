"use client";
import { TomboTable } from "@/app/tombow/tombo-table";
import { TombowData } from "@/types";
import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "@/hooks/useAddToArray";

type Props = {
  data: TombowData[];
};

const TombowArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<TombowData>();

  // const { data }: { data: TombowData[] | undefined } = useFetch({
  //   url: "/api/tombow",
  //   queryKey: "tombow",
  // });

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.productNumber);
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
