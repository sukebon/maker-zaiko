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
import { ChitoseData } from "@/types";

type Props = {
  data: ChitoseData[];
  datalist: string[];
};

export const ChitoseTable: FC<Props> = ({ data, datalist }) => {
  const [filterData, setFilterData] = useState<ChitoseData[]>([]);

  const addArray = (productNumber: string) => {
    const selectData = data.filter((d) => d.品番 === productNumber);
    if (!selectData) return;
    setFilterData((prev: ChitoseData[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="UNITE / Arbe"
          setFilterData={setFilterData}
          datalist={datalist}
          addArray={addArray}
        />
        {filterData.length > 0 && (
          <TableContainer mt={6} overflowX="unset" overflowY="unset">
            <Box
              overflowX="auto"
              position="relative"
              maxW="900px"
              maxH="calc(100vh - 230px)"
            >
              <Table size="sm" variant="simple" bg="white">
                <Thead position="sticky" top={0} zIndex="docked" bg="white">
                  <Tr>
                    <Th>品番</Th>
                    <Th>サイズ</Th>
                    <Th>在庫数</Th>
                    <Th>外部在庫数</Th>
                    <Th>仕掛１日付</Th>
                    <Th>仕掛１数量</Th>
                    <Th>仕掛２日付</Th>
                    <Th>仕掛２数量</Th>
                    <Th>仕掛３日付</Th>
                    <Th>仕掛３日付</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data: ChitoseData, index: number) => (
                    <Tr key={index}>
                      <Td>{data.品番}<Box as="span" ml={2}>{data.品名}</Box></Td>
                      <Td>{data.サイズ名}</Td>
                      <Td isNumeric>{data.在庫数}</Td>
                      <Td isNumeric>{data.外部倉庫在庫数}</Td>
                      <Td isNumeric>{data.仕掛１日付}</Td>
                      <Td isNumeric>{data.仕掛１数量}</Td>
                      <Td isNumeric>{data.仕掛２日付}</Td>
                      <Td isNumeric>{data.仕掛２数量}</Td>
                      <Td isNumeric>{data.仕掛３日付}</Td>
                      <Td isNumeric>{data.仕掛３日付}</Td>
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
