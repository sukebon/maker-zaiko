"use client";
import React, { FC, useState } from "react";

type Props = {
  title: string;
  fileName?: string;
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    csvFile: string[][] | null
  ) => void;
};

const CsvRegisterInput: FC<Props> = ({
  title,
  fileName = null,
  handleClick,
}) => {
  const [fileUpload, setFileUpload] = useState<string[][] | null>(
    null
  );
  const [fileNameChecker, setFileNameChecker] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFileUpload(null);
      return;
    }

    const result = e.target.files[0];

    if (fileName) {
      if (fileName + ".csv" !== result.name) {
        setFileNameChecker(true);
      } else {
        setFileNameChecker(false);
      }
    }

    let reader = new FileReader();
    reader.readAsText(result, "Shift_JIS");
    reader.addEventListener("load", function () {
      if (!reader.result) return;
      const csvFile = reader.result.toString();
      let csvString = csvFile?.toString().split(/\r?\n/);
      let csvArray = csvString.map((a) => a.replace(/(\")/g, "").split(","));
      setFileUpload(csvArray);
    });
  };

  const TdStyle = "text-left px-3 py-2 border border-slate-300";
  return (
    <tr>
      <td className={`${TdStyle}`}>{title}</td>
      <td className={`${TdStyle}`}>{fileName}</td>
      <td className={`${TdStyle}`}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        {fileNameChecker && <div className="text-red-500">ファイル名が違います。</div>}
      </td>
      <td className={`${TdStyle}`}>

        <button
          disabled={fileUpload && !fileNameChecker ? false : true}
          className="w-full px-3 py-1 rounded bg-blue-800 text-white disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={(e) => {
            handleClick(e, fileUpload);
          }}
        >
          送信
        </button>
      </td>
    </tr>
  );
};

export default CsvRegisterInput;
