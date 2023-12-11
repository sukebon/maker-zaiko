import { useState } from "react";

export function useAddArray<T>() {
  const [filterData, setFilterData] = useState<T[]>([]);

  const addArray = (productNumber: string,data:T[]) => {
    const selectData = data.filter((d: any) => d.品番 === productNumber);
    if (!selectData) return;
    setFilterData((prev: T[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };
  return {
    addArray,
    filterData,
    setFilterData,
  };
}
