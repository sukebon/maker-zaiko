-- CreateTable
CREATE TABLE "Bonmax" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER,
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

-- CreateTable
CREATE TABLE "Servo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER,
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

-- CreateTable
CREATE TABLE "Karsee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "colorName" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "brand" TEXT
);
