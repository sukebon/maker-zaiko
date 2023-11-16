import { ChikumaData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = async () => {
  const url = "/api/chikuma";
  const res = await axios.get(url);
  const data = await res.data;
  if (!data) return;
  return data;
};

export const useGetChikuma = () => {
  const QUERY_KEY = "chikuma";
  return useQuery<ChikumaData[]>({
    queryKey: [QUERY_KEY],
    queryFn: () => fetcher(),
  });
};
