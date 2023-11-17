export type ChikumaData = {
  品番: string;
  サイズ: string;
  現物在庫: string;
  入荷検品中: string;
  加工品納期１: string;
  加工品数量１: string;
  加工品納期２: string;
  加工品数量２: string;
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
  JANコード: number;
  商品コード: string;
  品番: string;
  品名: string;
  色名: string;
  サイズ: string;
  在庫数: string;
  入荷予定: string;
  外部倉庫: string;
  入荷日: string;
  調達日: string;
};
