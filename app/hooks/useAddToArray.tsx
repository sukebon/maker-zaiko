import { useState } from "react";

export function useAddToArray<T>() {
  const [filterData, setFilterData] = useState<T[]>([]);

  const addArray = (productNumber: string,data:T[]) => {
    const selectData = data.filter((d: any) => d.productNumber === productNumber);
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
