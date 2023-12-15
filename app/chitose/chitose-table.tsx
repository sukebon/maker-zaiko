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
        <TableArea maxW="1300px">
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>外部在庫数</Th>
                <Th>仕掛１日付</Th>
                <Th>仕掛１数量</Th>
                <Th>仕掛２日付</Th>
                <Th>仕掛２数量</Th>
                <Th>仕掛３日付</Th>
                <Th>仕掛３数量</Th>
                <Th>JANコード</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: ChitoseData, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td> {data.productName}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                  <Td isNumeric>{data.externalStock}</Td>
                  <Td isNumeric>{data.nextTimeDate}</Td>
                  <Td isNumeric>{data.nextTimeStock}</Td>
                  <Td isNumeric>{data.nextTimeDate2}</Td>
                  <Td isNumeric>{data.nextTimeStock2}</Td>
                  <Td isNumeric>{data.nextTimeDate3}</Td>
                  <Td isNumeric>{data.nextTimeStock3}</Td>
                  <Td isNumeric>{data.jan}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
