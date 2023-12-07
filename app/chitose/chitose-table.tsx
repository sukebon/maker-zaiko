"use client";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { ChitoseData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: ChitoseData[];
};

export const ChitoseTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
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
                  <Td>
                    {data.品番}
                    <Box as="span" ml={2}>
                      {data.品名}
                    </Box>
                  </Td>
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
        </TableArea>
      )}
    </>
  );
};
