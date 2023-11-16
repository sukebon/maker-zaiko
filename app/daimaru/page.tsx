import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import DaimaruArea from "./components/DaimaruArea";

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
      },
    }
  );
  return res.data;
};

export default async function Tombow() {
  const catalog1 = await getCatalog("liraxh-nnw");
  const catalog2 = await getCatalog("4szieql4_v");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <DaimaruArea />
      <CatalogArea>
        <Catalog catalogData={catalog1} />
        <Catalog catalogData={catalog2} />
      </CatalogArea>
    </main>
  );
}
