"use client";
import React, { FC } from "react";
import { ServoData } from "@/types";
import { FilterInput } from "@/components/FilterInput";
import { Flex } from "@chakra-ui/react";
import { ServoTable } from "./Servo-table";
import LoadingSpinner from "../../components/spinner";
import { useAddToArray } from "../../hooks/useAddToArray";

type Props = {
  data: ServoData[];
};

const ServoArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<ServoData>();

  if (!data) return <LoadingSpinner />;

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="SERVO / GROW / LAND"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <ServoTable filterData={filterData} />
    </Flex>
  );
};

export default ServoArea;
