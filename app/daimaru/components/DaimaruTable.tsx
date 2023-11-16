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
import { FilterInput } from "../../../components/FilterInput";
import { DaimaruData } from "@/types";

type Props = {
  data: DaimaruData[];
  datalist: string[];
};

export const DaimaruTable: FC<Props> = ({ data, datalist }) => {
  const [filterData, setFilterData] = useState<DaimaruData[]>([]);

  const addArray = (productNumber: string) => {
    const selectData = data.filter((d) => d.品番 === productNumber);
    if (!selectData) return;
    setFilterData((prev: DaimaruData[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="大丸白衣"
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
                    <Th>外部在庫1</Th>
                    <Th>外部在庫2</Th>
                    <Th>TOTAL</Th>
                    {/* <Th>受注残</Th>
                    <Th>予約キープ</Th>
                    <Th>仕掛</Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data: DaimaruData, index: number) => (
                    <Tr key={index}>
                      <Td>{data.品番}<Box as="span" ml={2}>{data.商品名}</Box></Td>
                      <Td>{data.サイズ}</Td>
                      <Td isNumeric>{data.在庫数}</Td>
                      <Td isNumeric>{data.徳島在庫}</Td>
                      <Td isNumeric>{data.外部在庫}</Td>
                      <Td isNumeric>{data.TOTAL}</Td>
                      {/* <Td isNumeric>{data.受注残}</Td>
                      <Td isNumeric>{data.予約}</Td>
                      <Td isNumeric>{data.仕掛}</Td> */}
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
