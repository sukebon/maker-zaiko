"use client";
import React, { FC, useEffect } from "react";
import { SeleryTable } from "./selery-table";
import { useFetch } from "../hooks/useFetch";
import { SeleryData } from "@/types";
import { FilterInput } from "@/components/FilterInput";
import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";
import LoadingSpinner from "../../components/spinner";
import { useAddToArray } from "../hooks/useAddToArray";
import axios from "axios";

type Props = {
  data: SeleryData[];
};

const SeleryArea: FC<Props> = ({ data }) => {
  const { addArray, filterData, setFilterData } = useAddToArray<SeleryData>();

  // const { data }: { data: SeleryData[] | undefined; } = useFetch({
  //   url: "/api/selery",
  //   queryKey: "selery",
  // });

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
