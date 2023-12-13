"use client";
import React, { FC } from "react";
import { useFetch } from "@/hooks/useFetch";
import { BonmaxData } from "@/types";
import { BonmaxTable } from "./bonmax-table";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "../../hooks/useAddToArray";

type Props = {
  data: BonmaxData[];
};

const BonmaxArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<BonmaxData>();

  if (!data) return <LoadingSpinner />;

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
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
  );
};

export default BonmaxArea;
