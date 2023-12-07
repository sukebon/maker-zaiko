import { Box, TableContainer } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  maxW?: string;
};

const TableArea: FC<Props> = ({ children, maxW = "900px" }) => {
  return (
    <TableContainer mt={6} overflowX="unset" overflowY="unset">
      <Box
        overflowX="auto"
        position="relative"
        maxW={maxW}
        maxH="calc(100vh - 230px)"
      >
        {children}
      </Box>
    </TableContainer>
  );
};

export default TableArea;
