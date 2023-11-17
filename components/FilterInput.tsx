"use client";
import { DaimaruData, ChikumaData, TombowData, ChitoseData, BonmaxData } from "@/types";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  text: string;
};

type Props = {
  title: string;
  setFilterData:
    | React.Dispatch<React.SetStateAction<ChikumaData[]>>
    | React.Dispatch<React.SetStateAction<TombowData[]>>
    | React.Dispatch<React.SetStateAction<ChitoseData[]>>
    | React.Dispatch<React.SetStateAction<DaimaruData[]>>
    | React.Dispatch<React.SetStateAction<BonmaxData[]>>;
  datalist: string[];
  addArray: Function;
};

export const FilterInput: FC<Props> = ({
  title,
  setFilterData,
  datalist,
  addArray,
}) => {
  const [placeholderArray, setPlaceholderArray] = useState<string[]>([]);
  const addPlaceholder = (productNumber: string) => {
    setPlaceholderArray((prev: string[]) => {
      const newArray = [...prev, productNumber].filter((_) => _ !== "");
      return newArray;
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      text: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addPlaceholder(data.text);
    addArray(data.text);
    reset();
  };

  const onReset = () => {
    reset();
    setPlaceholderArray([]);
    setFilterData([]);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        mt={6}
        px={6}
        w="full"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Box fontSize="2xl">{title}</Box>
        <Flex
          w="full"
          maxW="650px"
          gap={3}
          mt={6}
          direction={{ base: "column", md: "row" }}
        >
          <InputGroup w="full">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              list="itemlist"
              placeholder={
                placeholderArray.length > 0
                  ? placeholderArray.join(",")
                  : "品番を入力してください"
              }
              {...register("text")}
            />
          </InputGroup>
          <datalist id="itemlist">
            {datalist.map((data) => (
              <option key={data}>{data}</option>
            ))}
          </datalist>
          <Flex gap={3} w={{ base: "full", md: "auto" }}>
            <input
              type="submit"
              value="検索"
              className="w-24 p-2 text-sm bg-blue-800 text-white rounded cursor-pointer w-full md:w-24"
            />
            <button
              value="検索"
              className="w-24 p-2 bg-gray-500 text-sm text-white rounded cursor-pointer w-full md:w-24"
              onClick={onReset}
            >
              リセット
            </button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};
