"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { TombowData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: TombowData[];
};

export const TomboTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>色</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: TombowData, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td isNumeric>{data.color}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
