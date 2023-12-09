/*
  Warnings:

  - The primary key for the `Selery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `jan` on the `Selery` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Selery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jan" BIGINT,
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
