"use client";
import { Providers } from "@/app/providers";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { FilterInput } from "./FilterInput";
import { tombowData } from "@/type";

type Props = {
  data: tombowData[];
  datalist:string[]
};

export const TomboTable: FC<Props> = ({ data ,datalist}) => {
  const [filterData, setFilterData] = useState<tombowData[]>([]);

  const addArray = (productNumber:string) => {
    const selectData = data.filter((d) => d.品番 === productNumber);
    if(!selectData) return
    setFilterData((prev:tombowData[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };


  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="KIRAKU"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
        />
        {filterData.length > 0 && (
          <TableContainer mt={6} overflowX="unset" overflowY="unset">
            <Box
              overflowX="auto"
              position="relative"
              maxW="1000px"
              maxH="calc(100vh - 200px)"
            >
              <Table size="sm" variant="simple" bg="white">
                <Thead position="sticky" top={0} zIndex="docked" bg="white">
                  <Tr>
                    <Th>品番</Th>
                    <Th>サイズ</Th>
                    <Th>在庫数</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data: tombowData, index: number) => (
                    <Tr key={index}>
                      <Td>{data.品番}</Td>
                      <Td>{data.サイズ}</Td>
                      <Td isNumeric>{data.在庫数}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </TableContainer>
        )}
      </Flex>
    </Providers>
  );
};
