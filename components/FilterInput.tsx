"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  text: string;
};

type Props = {
  title: string;
  setFilterProductNumber: Function;
};

export const FilterInput: FC<Props> = ({ title, setFilterProductNumber }) => {
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
    console.log(data.text);
    setFilterProductNumber(data.text);
  };

  const onReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        mt={6}
        w="full"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Box fontSize="2xl">{title}</Box>
        <Flex gap={2} mt={6}>
          <InputGroup w="full" maxW="350px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="品番を入力してください" {...register("text")} />
          </InputGroup>
          <input
            type="submit"
            value="検索"
            className="w-24 text-sm bg-blue-800 text-white rounded cursor-pointer	"
          />
          <button
            value="検索"
            className="w-24 bg-gray-500 text-sm text-white rounded cursor-pointer"
            onClick={onReset}
          >
            リセット
          </button>
        </Flex>
      </Flex>
    </form>
  );
};
