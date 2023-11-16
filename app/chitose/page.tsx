import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import axios from "axios";
import ChitoseArea from "./components/ChitoseArea";

const getCatalog = async (id: string) => {
  const res = await axios.get(
    `https://daimaru-hakui.microcms.io/api/v1/catalog/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY
      },
    }
  );
  return res.data;
};

export default async function Chitose() {
  const catalogUnite = await getCatalog("oxqcchhqb");
  const catalogArbe = await getCatalog("ekpj9zvfm");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <ChitoseArea/>
      <CatalogArea>
        <Catalog catalogData={catalogUnite} />
        <Catalog catalogData={catalogArbe} />
      </CatalogArea>
    </main>
  );
}
