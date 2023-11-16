import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Params = {
  url: string;
  queryKey: string;
};

const fetcher = async (params: Params) => {
  const res = await axios.get(params.url);
  const data = await res.data;
  if (!data) return;
  return data;
};

export const useFetch = (params: Params) => {
  const QUERY_KEY = params.queryKey;
  return useQuery(
    {
      queryKey: [QUERY_KEY],
      queryFn: () => fetcher(params),
    }
  );
};
