"use client";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { DaimaruData, KarseeData } from "@/types";
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
                  <Td>{data.品番}</Td>
                  <Td>{data.アイテム名称}</Td>
                  <Td>{data.カラー名称}</Td>
                  <Td>{data.サイズ}</Td>
                  <Td isNumeric>
                    {data.次回上がり予定日 ? "仕掛数 (" + data.在庫数 + ")" : data.在庫数}
                  </Td>
                  <Td>{data.次回上がり予定日}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
