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
import { BonmaxData } from "@/types";

type Props = {
  data: BonmaxData[];
  datalist: string[];
};

export const BonmaxTable: FC<Props> = ({ data, datalist }) => {
  const [filterData, setFilterData] = useState<BonmaxData[]>([]);

  const addArray = (productNumber: string) => {
    const selectData = data.filter((d) => d.品番 === productNumber);
    if (!selectData) return;
    setFilterData((prev: BonmaxData[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="bonmax"
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
                    {/* <Th>JANコード</Th> */}
                    <Th>品番</Th>
                    <Th>品名</Th>
                    <Th>色名</Th>
                    <Th>サイズ</Th>
                    <Th>在庫数</Th>
                    <Th>入荷予定</Th>
                    <Th>外部倉庫</Th>
                    <Th>入荷日</Th>
                    {/* <Th>調達日</Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data, index: number) => (
                    <Tr key={index}>
                      {/* <Td>{data.JANコード}</Td> */}
                      <Td>{data.品番}</Td>
                      <Td >{data.品名}</Td>
                      <Td >{data.色名}</Td>
                      <Td textAlign="center">{data.サイズ}</Td>
                      <Td isNumeric>{data.在庫数}</Td>
                      <Td isNumeric>{data.入荷予定}</Td>
                      <Td isNumeric>{data.外部倉庫}</Td>
                      <Td>{data.入荷日 !== "0" && data.入荷日}</Td>
                      {/* <Td>{data.調達日}</Td> */}
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
