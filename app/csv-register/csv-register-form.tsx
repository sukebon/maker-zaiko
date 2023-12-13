"use client";
import React from "react";
import CsvRegisterInput from "./csv-register-input";
import { useCsvHandleClick } from "@/hooks/useCsvHandleClick";

const CsvRegisterForm = () => {
  const {
    handleClickSelery,
    handleClickBonmax,
    handleClickServo,
    handleClickChikuma,
    handleClickKarsee,
    handleClickChitose,
  } = useCsvHandleClick();

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
              title="チクマ"
              fileName="前日在庫データ"
              handleClick={handleClickChikuma}
            />
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
            <CsvRegisterInput
              title="サーヴォ"
              fileName="zaiko"
              handleClick={handleClickServo}
            />
            <CsvRegisterInput
              title="カーシーカシマ"
              fileName="在庫データ"
              handleClick={handleClickKarsee}
            />
            <CsvRegisterInput
              title="チトセ"
              fileName="hinban"
              handleClick={handleClickChitose}
            />
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CsvRegisterForm;
