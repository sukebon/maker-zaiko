export type DaimaruData = {
  品番: string;
  商品名: string;
  サイズ: string;
  在庫数: string;
  徳島在庫: string;
  外部在庫: string;
  TOTAL: string;
  受注残: string;
  予約: string;
  仕掛: string;
};

export type TombowData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  size: string | null;
  stock: number | null;
  // 品番: string;
  // //  色:string;
  // サイズ: string;
  // 在庫数: string;
};

export type ChikumaData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  size: string | null;
  stock: number | null;
  inspectStock: number | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock2: number | null;
  nextTimeDate2: string | null;
  createdAt: string | null;
};

export type ChitoseData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  externalStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  nextTimeDate3: string | null;
  nextTimeStock3: number | null;
  createdAt: string | null;
};

export type BonmaxData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  externalStock: number | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  leadTime: string | null;
  createdAt: string | null;
};

export type SeleryData = {
  id: string;
  row: number;
  jan: string | null;
  stock: number | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  createdAt: string | null;
};

export type KarseeData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  brand: string | null;
  createdAt: string | null;
};

export type ServoData = {
  id: string;
  row: number;
  jan: string | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  stock: number | null;
  nextTimeDate: string | null;
  nextTimeStock: number | null;
  nextTimeDate2: string | null;
  nextTimeStock2: number | null;
  createdAt: string | null;
};
