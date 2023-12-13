/*
  Warnings:

  - Made the column `row` on table `Servo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `row` on table `Bonmax` required. This step will fail if there are existing NULL values in that column.
  - Made the column `row` on table `Chikuma` required. This step will fail if there are existing NULL values in that column.
  - Made the column `row` on table `Karsee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `row` on table `Selery` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Chitose" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "nextTimeDate3" TEXT,
    "nextTimeStock3" INTEGER
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Servo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER
);
INSERT INTO "new_Servo" ("color", "id", "jan", "nextTimeDate", "nextTimeDate2", "nextTimeStock", "nextTimeStock2", "productName", "productNumber", "row", "size", "stock") SELECT "color", "id", "jan", "nextTimeDate", "nextTimeDate2", "nextTimeStock", "nextTimeStock2", "productName", "productNumber", "row", "size", "stock" FROM "Servo";
DROP TABLE "Servo";
ALTER TABLE "new_Servo" RENAME TO "Servo";
CREATE TABLE "new_Bonmax" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT,
    "leadTime" TEXT
);
INSERT INTO "new_Bonmax" ("color", "externalStock", "id", "jan", "leadTime", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "row", "size", "stock") SELECT "color", "externalStock", "id", "jan", "leadTime", "nextTimeDate", "nextTimeStock", "productName", "productNumber", "row", "size", "stock" FROM "Bonmax";
DROP TABLE "Bonmax";
ALTER TABLE "new_Bonmax" RENAME TO "Bonmax";
CREATE TABLE "new_Chikuma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "inspectStock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER
);
INSERT INTO "new_Chikuma" ("id", "inspectStock", "jan", "nextTimeDate", "nextTimeDate2", "nextTimeStock", "nextTimeStock2", "productNumber", "row", "size", "stock") SELECT "id", "inspectStock", "jan", "nextTimeDate", "nextTimeDate2", "nextTimeStock", "nextTimeStock2", "productNumber", "row", "size", "stock" FROM "Chikuma";
DROP TABLE "Chikuma";
ALTER TABLE "new_Chikuma" RENAME TO "Chikuma";
CREATE TABLE "new_Karsee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
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
CREATE TABLE "new_Selery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
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
