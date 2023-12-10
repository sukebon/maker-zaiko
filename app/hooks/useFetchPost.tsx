import axios from "axios";

export const useFetchPost = () => {
  async function fetchPost<T>({ body, url }: { body: T, url: string; }) {
    const res = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const data = await res.data;
    if (!data) return;
    return data;
  };
  return {
    fetchPost
  };
};
