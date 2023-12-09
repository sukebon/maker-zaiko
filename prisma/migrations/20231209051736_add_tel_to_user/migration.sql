-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Selery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jan" INTEGER NOT NULL,
    "stock" INTEGER,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT
);
INSERT INTO "new_Selery" ("color", "id", "jan", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "size", "stock") SELECT "color", "id", "jan", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "size", "stock" FROM "Selery";
DROP TABLE "Selery";
ALTER TABLE "new_Selery" RENAME TO "Selery";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
