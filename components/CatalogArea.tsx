"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CatalogArea: FC<Props> = ({ children }) => {
  return (
    <>
      <Box mt={22}>
        <Flex
          className="flex-col lg:flex-row"
          gap={12}
          py={12}
          align="center"
          justify="flex-end"
        >
          {children}
        </Flex>
      </Box>
    </>
  );
};
