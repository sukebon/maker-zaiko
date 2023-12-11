import axios from "axios";

export const useFetchPost = () => {
  async function fetchPost<T>({ body, url }: { body: T; url: string }) {
    try {
      const res = await axios.post(url, {
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.data;
      if (!data) return;
      return data;
    } catch (err) {
      console.log("request error")
      console.error(err);
    }
  }
  return {
    fetchPost,
  };
};
