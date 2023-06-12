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
import { FilterInput } from "./FilterInput";
import { useDebounce } from "react-use";
import { tombowData } from "@/type";

type Props = {
  data: tombowData[];
};

export const TomboTable: FC<Props> = ({ data }) => {
  const [filterProductNumber, setFilterProductNumber] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setFilterData(
        data?.filter((value) => value.品番.includes(filterProductNumber))
      );
    },
    1000,
    [filterProductNumber]
  );

  const [filterData, setFilterData] = useState<tombowData[]>([]);

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="KIRAKU"
          setFilterProductNumber={setFilterProductNumber}
        />
        {filterData.length > 0 && (
          <TableContainer mt={6} overflowX="unset" overflowY="unset">
            <Box
              overflowX="auto"
              position="relative"
              maxW="1000px"
              maxH="calc(100vh - 200px)"
            >
              <Table size="sm" variant="simple" bg="white">
                <Thead position="sticky" top={0} zIndex="docked" bg="white">
                  <Tr>
                    <Th>品番</Th>
                    <Th>サイズ</Th>
                    <Th>在庫数</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data: tombowData, index: number) => (
                    <Tr key={index}>
                      <Td>{data.品番}</Td>
                      <Td>{data.サイズ}</Td>
                      <Td isNumeric>{data.在庫数}</Td>
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
