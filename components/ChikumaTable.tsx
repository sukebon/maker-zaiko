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
import React, { FC,  useState } from "react";
import { FilterInput } from "./FilterInput";
import { useDebounce } from "react-use";
import { chikumaData } from "@/type";

type Props = {
  data: chikumaData[];
};

export const ChikumaTable: FC<Props> = ({ data }) => {
  const [filterProductNumber, setFilterProductNumber] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setFilterData(
        data?.filter((value) => value.品番.includes(filterProductNumber))
      );
    },
    100,
    [filterProductNumber]
  );

  const [filterData, setFilterData] = useState<chikumaData[]>([]);

  return (
    <Providers>
      <Flex direction="column" alignItems="center" w="full">
        <FilterInput
          title="ALPHA PIER / FELLOWS"
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
                    <Th>現物在庫</Th>
                    <Th>入荷検品中</Th>
                    <Th>加工納期1</Th>
                    <Th>加工品1</Th>
                    <Th>加工納期2</Th>
                    <Th>加工品2</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.map((data: chikumaData, index: number) => (
                    <Tr key={index}>
                      <Td>{data.品番}</Td>
                      <Td>{data.サイズ}</Td>
                      <Td isNumeric>{data.現物在庫}</Td>
                      <Td isNumeric>{data.入荷検品中}</Td>
                      <Td>{data.加工品納期１ !== data.加工品納期１}</Td>
                      <Td isNumeric>{data.加工品数量１}</Td>
                      <Td>{data.加工品納期２ !== data.加工品納期２}</Td>
                      <Td isNumeric>{data.加工品数量２}</Td>
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
