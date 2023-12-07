"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { ChikumaData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: ChikumaData[];
};

export const ChikumaTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
          <Table size="sm" variant="simple" bg="white">
            <Thead position="sticky" top={0} zIndex="docked" bg="white">
              <Tr>
                <Th>品番</Th>
                <Th>サイズ</Th>
                <Th>現物在庫</Th>
                <Th>入荷検品中</Th>
                <Th>加工納期1</Th>
                <Th>加工品1</Th>
                <Th>加工納期2</Th>
                <Th>加工品2</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData?.map((data: ChikumaData, index: number) => (
                <Tr key={index}>
                  <Td>{data.品番}</Td>
                  <Td>{data.サイズ}</Td>
                  <Td isNumeric>{data.現物在庫}</Td>
                  <Td isNumeric>{data.入荷検品中}</Td>
                  <Td>{data.加工品納期１ !== "0" && data.加工品納期１}</Td>
                  <Td isNumeric>{data.加工品数量１}</Td>
                  <Td>{data.加工品納期２ !== "0" && data.加工品納期２}</Td>
                  <Td isNumeric>{data.加工品数量２}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableArea>
      )}
    </>
  );
};
