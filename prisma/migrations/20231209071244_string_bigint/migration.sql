-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Selery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER,
    "jan" TEXT,
    "stock" INTEGER,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT
);
INSERT INTO "new_Selery" ("color", "id", "jan", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "row", "size", "stock") SELECT "color", "id", "jan", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "row", "size", "stock" FROM "Selery";
DROP TABLE "Selery";
ALTER TABLE "new_Selery" RENAME TO "Selery";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
