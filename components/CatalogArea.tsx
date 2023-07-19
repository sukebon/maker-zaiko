"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CatalogArea: FC<Props> = ({ children }) => {
  return (
    <>
      <Box className="static lg:fixed" left={10} bottom={20} mt={12}>
        <Flex gap={12} direction="column" py={12} align="center">
          {children}
        </Flex>
      </Box>
    </>
  );
};
