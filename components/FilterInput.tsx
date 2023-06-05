"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

type Props = {
    title:string;
  setFilterProductNumber: Function;
};

export const FilterInput: FC<Props> = ({ title,setFilterProductNumber }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterProductNumber(e.target.value);
  };

  return (
    <Flex
      mt={6}
      w="full"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box fontSize="2xl">{title}</Box>
      <InputGroup mt={3} w="300px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="品番を入力してください"
          onChange={handleChange}
        />
      </InputGroup>
    </Flex>
  );
};
