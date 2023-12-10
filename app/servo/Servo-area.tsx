"use client";
import React, { FC } from "react";
import { useFetch } from "../hooks/useFetch";
import { SeleryData, ServoData } from "@/types";
import { FilterInput } from "@/components/FilterInput";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import { useAddArray } from "../hooks/useAddArray";
import { ServoTable } from "./Servo-table";
import LoadingSpinner from "../../components/spinner";
import { useAddToArray } from "../hooks/useAddToArray";

type Props = {
  data: ServoData[];
};

const ServoArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<ServoData>();

  // const { data }: { data: ServoData[] | undefined; } = useFetch({
  //   url: "/api/servo",
  //   queryKey: "servo",
  // });
  if (!data) return <LoadingSpinner />;

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));

  return (
    <Providers>
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
    </Providers>
  );
};

export default ServoArea;
