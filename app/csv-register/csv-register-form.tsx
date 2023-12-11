"use client";
import React from "react";
import CsvRegisterInput from "./csv-register-input";
import { useFetchPost } from "../../hooks/useFetchPost";
import { useStore } from "@/store";

const CsvRegisterForm = () => {
  const { fetchPost } = useFetchPost();
  const setIsLoading = useStore((state) => state.setIsLoading);

  const handleClickSelery = async (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string[][] | null
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (!csvFile) return;
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
    await fetch("/api/selery",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({body})
    })
    // await fetchPost({ body, url: "/api/selery" });
    setIsLoading(false);
  };

  const handleClickBonmax = async (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string[][] | null
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (!csvFile) return;
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
    setIsLoading(false);
  };

  const handleClickServo = async (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string[][] | null
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (!csvFile) return;
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
    setIsLoading(false);
  };

  const ThStyle = "text-left px-3 py-2 border border-slate-300";

  return (
    <>
      <form>
        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr className="text-sm">
              <th className={`${ThStyle}`}>メーカー名</th>
              <th className={`${ThStyle}`}>ファイル名</th>
              <th className={`${ThStyle}`}>ファイル選択</th>
              <th className={`${ThStyle}`}>ボタン</th>
            </tr>
          </thead>
          <tbody>
            <CsvRegisterInput
              title="セロリー"
              fileName="SNDZAIKO9"
              handleClick={handleClickSelery}
            />
            <CsvRegisterInput
              title="ボンマックス"
              fileName="BM_DMHK-ZAIKO"
              handleClick={handleClickBonmax}
            />
            <CsvRegisterInput title="サーヴォ" fileName="zaiko" handleClick={handleClickServo} />
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CsvRegisterForm;
