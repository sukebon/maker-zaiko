"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { SeleryData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: SeleryData[];
};

export const SeleryTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>品名</Th>
                <Th>色</Th>
                <Th>サイズ</Th>
                <Th>在庫数</Th>
                <Th>次回入荷日</Th>
                <Th>次回入荷数</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: SeleryData, index: number) => (
                <Tr key={index}>
                  <Td>{data.品番}</Td>
                  <Td>{data.アイテム}</Td>
                  <Td>{data.色}</Td>
                  <Td textAlign="center">{data.サイズ}</Td>
                  <Td isNumeric>{data.在庫数}</Td>
                  <Td>{data.次回入荷日}</Td>
                  <Td isNumeric>{data.次回入荷数}</Td>
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
