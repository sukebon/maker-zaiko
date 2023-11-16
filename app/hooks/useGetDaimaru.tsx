import { DaimaruData } from "@/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetcher = async()=>{
    const url = "/api/daimaru"
    const res = await axios.get(url)
    const data = await res.data;
    if(!data) return
    return data
}

export const useGetDaimaru = () => {
    const QUERY_KEY = "daimaru"
    return useQuery<DaimaruData[]>({
        queryKey:[QUERY_KEY],
        queryFn:()=>fetcher()
    })
}