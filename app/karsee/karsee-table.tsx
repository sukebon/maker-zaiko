"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { KarseeData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: KarseeData[];
};

export const KarseeTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>カラー</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>次回上がり予定</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: KarseeData, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td>{data.productName}</Td>
                  <Td>{data.color}</Td>
                  <Td>{data.size}</Td>
                  <Td isNumeric>
                    {data.nextTimeDate ? "仕掛数 (" + data.stock + ")" : data.stock}
                  </Td>
                  <Td>{data.nextTimeDate}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
