import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Selery = {
  jan: number;
  stock: number;
  nextTimeDate: string;
  nextTimeStock: number;
  productNumber: string;
  productName: string;
  color: string;
  size: string;
}[];

type Bonmax = {
  jan: number;
  productNumber: string;
  productName: string;
  color: string;
  size: string;
  stock: number;
  nextTimeStock: number;
  externalStock: number;
  nextTimeDate: string;
  leadTime: string;
}[];

type Servo = {
  jan: number;
  productNumber: string;
  productName: string;
  color: string;
  size: string;
  stock: number;
  nextTimeDate: string;
  nextTimeStock: number;
  nextTimeDate2: string;
  nextTimeStock2: number;
}[];

export const useMutationSqlite = () => {
  const queryClient = useQueryClient();

  async function fetcher<T>({ params, url }: { params: T; url: string }) {
    const res = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: params,
    });
    const data = await res.data;
    return data;
  }

  const useMutationSelery = useMutation({
    mutationFn: ({ params, url }: { params: Selery; url: string }) =>
      fetcher<Selery>({ params, url }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["selery"],
      });
    },
  });

  const useMutationBonmax = useMutation({
    mutationFn: ({ params, url }: { params: Bonmax; url: string }) =>
      fetcher<Bonmax>({ params, url }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bonmax"],
      });
    },
  });

  const useMutationServo = useMutation({
    mutationFn: ({ params, url }: { params: Servo; url: string }) =>
      fetcher<Servo>({ params, url }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["servo"],
      });
    },
  });

  return {
    useMutationSelery,
    useMutationBonmax,
    useMutationServo,
  };
};
