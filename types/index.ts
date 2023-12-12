export type ChikumaData = {
  id: string;
  row: number | null;
  jan: string | null;
  productNumber: string | null;
  size: string | null;
  stock: number | null;
  inspectStock: number | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
  nextTimeStock2: number | null;
  nextTimeDate2: string | null;
};

export type TombowData = {
  品番: string;
  //  色:string;
  サイズ: string;
  在庫数: string;
};

export type ChitoseData = {
  品番: string;
  品名: string;
  カラー名: string;
  サイズ名: string;
  在庫数: string;
  外部倉庫在庫数: string;
  仕掛１日付: string;
  仕掛１数量: string;
  仕掛２日付: string;
  仕掛２数量: string;
  仕掛３日付: string;
  仕掛３数量: string;
};

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

export type BonmaxData = {
  id: string;
  row: number | null;
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
};

export type SeleryData = {
  id: string;
  row: number | null;
  jan: string | null;
  stock: number | null;
  productNumber: string | null;
  productName: string | null;
  color: string | null;
  size: string | null;
  nextTimeStock: number | null;
  nextTimeDate: string | null;
};

export type KarseeData = {
  ブランド: string;
  品番: string;
  アイテム名称: string;
  カラー: string;
  サイズ: string;
  JANコード: string;
  次回上がり予定日: string;
  在庫数: string;
  作成日付: string;
  作成日付時刻: string;
  品名: string;
  カラー名称: string;
};

export type ServoData = {
  id: string;
  row: number | null;
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
};
