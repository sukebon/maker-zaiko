import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import SeleryArea from "./selery-area";

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
      },
    }
  );
  return res.data;
};

export default async function Chitose() {
  const catalogSelerySS = await getCatalog("yrwob4gte");
  const catalogSeleryAW = await getCatalog("gxs3ov-pq");
  const catalogIfory = await getCatalog("8-8jzhxmy");
  const catalogSkitto = await getCatalog("o74ob5ld5");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <SeleryArea />
      <CatalogArea>
        <Catalog catalogData={catalogSelerySS} />
        <Catalog catalogData={catalogSeleryAW} />
        <Catalog catalogData={catalogIfory} />
        <Catalog catalogData={catalogSkitto} />
      </CatalogArea>
    </main>
  );
}
