"use client";
import React, { FC } from "react";
import { useFetch } from "@/hooks/useFetch";
import { KarseeData } from "@/types";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddArray } from "../../hooks/useAddArray";
import { KarseeTable } from "./karsee-table";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "@/hooks/useAddToArray";

type Props = {
  data: KarseeData[];
};

const KarseeArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<KarseeData>();

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Karsee"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <KarseeTable filterData={filterData} />
    </Flex>
  );
};

export default KarseeArea;
