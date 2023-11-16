import { TombowData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = async () => {
  const url = "/api/tombow";
  const res = await axios.get(url);
  const data = res.data;
  if (!data) return;
  return data;
};

export const useGetTombow = () => {
  const QUERY_KEY = "tombow";
  return useQuery<TombowData[]>({
    queryKey: [QUERY_KEY],
    queryFn: () => fetcher(),
  });
};
