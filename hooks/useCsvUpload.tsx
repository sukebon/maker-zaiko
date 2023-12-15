import { useStore } from "@/store";
import { useFetchPost } from "./useFetchPost";
import { useState } from "react";

export const useCsvUpload = () => {
  const { fetchPost } = useFetchPost();
  const setIsLoading = useStore((state) => state.setIsLoading);
  const [resultList, setResultList] = useState<string[]>([]);

  const tombowCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[4]),
      productNumber: csv[0].trim() + "-" + csv[1],
      color: csv[1],
      size: csv[2],
      stock: Number(csv[3]),
    }));
    await fetchPost({ body, url: "/api/tombow" });
    setResultList((prev) => [...prev, "トンボ 登録しました。"]);
    setIsLoading(false);
  };

  const seleryCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[0]),
      stock: Number(csv[1]),
      nextTimeDate: csv[2],
      nextTimeStock: Number(csv[3]),
      productNumber: csv[4],
      productName: csv[5],
      color: csv[6],
      size: csv[7],
    }));
    await fetchPost({ body, url: "/api/selery" });
    setResultList((prev) => [...prev, "セロリー 登録しました。"]);
    setIsLoading(false);
  };

  const bonmaxCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    const body = csvFile.map((csv) => ({
      jan: Number(csv[0]),
      productNumber: csv[1] + "-" + csv[3],
      productName: csv[2],
      color: csv[4],
      size: csv[5],
      stock: Number(csv[7]),
      nextTimeStock: Number(csv[8]),
      externalStock: Number(csv[9]),
      nextTimeDate: csv[10],
      leadTime: csv[11],
    }));
    await fetchPost({ body, url: "/api/bonmax" });
    setResultList((prev) => [...prev, "ボンマックス 登録しました。"]);
    setIsLoading(false);
  };

  const servoCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[10]),
      productNumber: csv[0],
      productName: csv[1],
      color: csv[2],
      size: csv[3],
      stock: Number(csv[4]),
      nextTimeDate: csv[5],
      nextTimeStock: Number(csv[6]),
      nextTimeDate2: csv[7],
      nextTimeStock2: Number(csv[8]),
    }));
    await fetchPost({ body, url: "/api/servo" });
    setResultList((prev) => [...prev, "サーヴォ 登録しました。"]);
    setIsLoading(false);
  };

  const chikumaCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[9]),
      productNumber: csv[0],
      size: csv[2],
      stock: Number(csv[3]),
      inspectStock: Number(csv[4]),
      nextTimeDate: csv[5],
      nextTimeStock: Number(csv[6]),
      nextTimeDate2: csv[7],
      nextTimeStock2: Number(csv[8]),
    }));
    await fetchPost({ body, url: "/api/chikuma" });
    setResultList((prev) => [...prev, "チクマ 登録しました。"]);
    setIsLoading(false);
  };

  const karseeCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[4]),
      productNumber: csv[1] + "-" + csv[2],
      productName: csv[9],
      size: csv[3],
      stock: Number(csv[6]),
      color: csv[11],
      nextTimeDate: csv[5],
      brand: csv[0],
    }));
    await fetchPost({ body, url: "/api/karsee" });
    setResultList((prev) => [...prev, "カーシーカシマ 登録しました。"]);
    setIsLoading(false);
  };

  const chitoseCsvRegister = async (csvFile: string[][] | null) => {
    if (!csvFile) return;
    setIsLoading(true);
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[0]),
      productNumber: csv[1],
      productName: csv[2],
      color: csv[4],
      size: csv[5],
      stock: Number(csv[6]),
      externalStock: Number(csv[7]),
      nextTimeDate: csv[8],
      nextTimeStock: Number(csv[9]),
      nextTimeDate2: csv[10],
      nextTimeStock2: Number(csv[11]),
      nextTimeDate3: csv[12],
      nextTimeStock3: Number(csv[13]),
    }));
    await fetchPost({ body, url: "/api/chitose" });
    setResultList((prev) => [...prev, "チトセ 登録しました。"]);
    setIsLoading(false);
  };

  return {
    tombowCsvRegister,
    seleryCsvRegister,
    bonmaxCsvRegister,
    servoCsvRegister,
    chikumaCsvRegister,
    karseeCsvRegister,
    chitoseCsvRegister,
    resultList,
  };
};
