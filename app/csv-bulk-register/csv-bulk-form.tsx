"use client";
import { useCsvUpload } from "@/hooks/useCsvUpload";
import { useStore } from "@/store";
import React, { useState } from "react";

const CsvBulkForm = () => {
  const [fileUploads, setFileUploads] = useState<File[] | null>(null);
  const setIsLoading = useStore((state) => state.setIsLoading);
  const isLoading = useStore((state) => state.isLoading);
  const {
    resultList,
    tombowCsvRegister,
    chikumaCsvRegister,
    seleryCsvRegister,
    chitoseCsvRegister,
    servoCsvRegister,
    karseeCsvRegister,
    bonmaxCsvRegister,
  } = useCsvUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setFileUploads((prev) => [...Array.from(prev || []), ...Array.from(files)]);
  };

  const handleClickRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    fileUploads: File[] | null
  ) => {
    e.preventDefault();
    if (!fileUploads) return;
    setIsLoading(true);
    return await Promise.all(
      fileUploads.map(async (file) => {
        await csvFileRegister(file);
      })
    ).catch((err) => {
      console.error(err);
    });
  };

  const regTest = (str: string, filename: string) => {
    const chitose = new RegExp(str);
    return chitose.test(filename);
  };

  const csvFileRegister = async (file: File) => {
    const reader = new FileReader();
    reader.readAsText(file, "Shift_JIS");
    return reader.addEventListener("load", async function () {
      if (!reader.result) return;
      const csvFile = reader.result.toString();
      let csvString = csvFile?.toString().split(/\r?\n/);
      let csvArray = csvString.map((a) => a.replace(/(\")/g, "").split(","));

      if (regTest("^zaikoDownload", file.name)) {
        await tombowCsvRegister(csvArray);
      }
      if (regTest("^前日在庫データ", file.name)) {
        await chikumaCsvRegister(csvArray);
      }
      if (regTest("^SNDZAIKO9", file.name)) {
        await seleryCsvRegister(csvArray);
      }
      if (regTest("^hinban", file.name)) {
        await chitoseCsvRegister(csvArray);
      }
      if (regTest("^zaiko_", file.name)) {
        await servoCsvRegister(csvArray);
      }
      if (regTest("^在庫データ", file.name)) {
        await karseeCsvRegister(csvArray);
      }
      if (regTest("^BM_DMHK-ZAIKO", file.name)) {
        await bonmaxCsvRegister(csvArray);
      }
    });
  };

  return (
    <form>
      <div className="w-full flex flex-col justify-center">
        <div className="relative w-full h-56">
          <input
            className="w-full h-full opacity-0 absolute z-20"
            type="file"
            accept=".csv"
            multiple
            onChange={handleFileChange}
          />
          <div className="w-full h-full flex flex-col justify-center items-center border border-1 bg-white absolute z-10">
            <div>ファイルアップロード</div>
            <div>
              {fileUploads &&
                fileUploads.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
            </div>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-800 px-3 py-1 rounded-md text-white"
          onClick={(e) => handleClickRegister(e, fileUploads)}
        >
          登録
        </button>
        <div className="mt-3">
          {resultList.map((result, idx) => (
            <div key={idx}>{result}</div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default CsvBulkForm;
