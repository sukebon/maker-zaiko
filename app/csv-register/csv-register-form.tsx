"use client";
import React from "react";
import CsvRegisterInput from "./csv-register-input";
import { useMutationSqlite } from "../hooks/useMutationSqlite";

const CsvRegisterForm = () => {
  const { useMutationSelery, useMutationBonmax, useMutationServo } = useMutationSqlite();

  const handleClickSelery = (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string | ArrayBuffer | null
  ) => {
    e.preventDefault();
    if (!csvFile) return;
    const csvString = csvFile?.toString().split(/\r?\n/);
    const csvArray = csvString.map((a) => a.split(","));
    if (!csvArray) return;
    const header = csvArray.shift();
    if (!header) return;
    const body = csvArray.map((csv) => ({
      jan: Number(csv[0]),
      stock: Number(csv[1]),
      nextTimeDate: csv[2],
      nextTimeStock: Number(csv[3]),
      productNumber: csv[4],
      productName: csv[5],
      color: csv[6],
      size: csv[7],
    }));
    const { mutate } = useMutationSelery;
    mutate({ params: body, url: "/api/selery" });
  };

  const handleClickBonmax = (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string | ArrayBuffer | null
  ) => {
    e.preventDefault();
    if (!csvFile) return;
    const csvString = csvFile?.toString().split(/\r?\n/);
    const csvArray = csvString.map((a) => a.split(","));
    if (!csvArray) return;

    const body = csvArray.map((csv) => ({
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
    const { mutate } = useMutationBonmax;
    mutate({ params: body, url: "/api/bonmax" });
  };

  const handleClickServo = (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string | ArrayBuffer | null
  ) => {
    e.preventDefault();
    if (!csvFile) return;
    let csvString = csvFile?.toString().split(/\r?\n/);
    let csvArray = csvString.map((a) => a.split(","));
    if (!csvArray) return;
    const header = csvArray.shift();
    if (!header) return;
    const body = csvArray.map((csv) => ({
      jan: Number(csv[10].replace(/(\")/g, "")),
      productNumber: csv[0].replace(/(\")/g, ""),
      productName: csv[1].replace(/(\")/g, ""),
      color: csv[2].replace(/(\")/g, ""),
      size: csv[3].replace(/(\")/g, ""),
      stock: Number(csv[4].replace(/(\")/g, "")),
      nextTimeDate: csv[5].replace(/(\")/g, ""),
      nextTimeStock: Number(csv[6].replace(/(\")/g, "")),
      nextTimeDate2: (csv[7].replace(/(\")/g, "")),
      nextTimeStock2: Number(csv[8].replace(/(\")/g, "")),
    }));
    console.log(body);
    const { mutate } = useMutationServo;
    mutate({ params: body, url: "/api/servo" });
  };

  const ThStyle = "text-left px-3 py-2 border border-slate-300";

  return (
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
          <CsvRegisterInput title="サーヴォ" handleClick={handleClickServo} />
        </tbody>
      </table>
    </form>
  );
};

export default CsvRegisterForm;
