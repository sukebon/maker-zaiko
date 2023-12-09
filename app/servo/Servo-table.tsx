"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { ServoData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: ServoData[];
};

export const ServoTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea maxW="1000">
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>色</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>入荷予定①日付</Th>
                <Th>入荷予定①予定数</Th>
                <Th>入荷予定②日付</Th>
                <Th>入荷予定②予定数</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: ServoData, index: number) => (
                <Tr key={index}>
                  <Td>{data.productNumber}</Td>
                  <Td>{data.productName}</Td>
                  <Td>{data.color}</Td>
                  <Td textAlign="center">{data.size}</Td>
                  <Td isNumeric>{data.stock}</Td>
                  <Td textAlign="center">{data.nextTimeDate}</Td>
                  <Td isNumeric>{data.nextTimeStock}</Td>
                  <Td textAlign="center">{data.nextTimeDate2}</Td>
                  <Td isNumeric>{data.nextTimeStock2}</Td>
                  {/* <Td>{data.JANコード}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
