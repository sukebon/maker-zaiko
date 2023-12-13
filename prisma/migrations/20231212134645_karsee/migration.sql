/*
  Warnings:

  - You are about to drop the column `colorName` on the `Karsee` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Karsee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "brand" TEXT
);
INSERT INTO "new_Karsee" ("brand", "color", "id", "jan", "nextTimeDate", "productName", "productNumber", "row", "size", "stock") SELECT "brand", "color", "id", "jan", "nextTimeDate", "productName", "productNumber", "row", "size", "stock" FROM "Karsee";
DROP TABLE "Karsee";
ALTER TABLE "new_Karsee" RENAME TO "Karsee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
