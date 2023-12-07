"use client";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { BonmaxData } from "@/types";
import TableArea from "@/components/table-area";

type Props = {
  filterData: BonmaxData[];
};

export const BonmaxTable: FC<Props> = ({ filterData }) => {
  return (
    <>
      {filterData.length > 0 && (
        <TableArea>
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
                  <Td>{data.品名}</Td>
                  <Td>{data.色名}</Td>
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
        </TableArea>
      )}
    </>
  );
};
