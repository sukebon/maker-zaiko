-- CreateTable
CREATE TABLE "Selery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "stock" INTEGER,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Bonmax" (
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
    "leadTime" TEXT,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Servo" (
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
    "nextTimeStock2" INTEGER,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Karsee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "brand" TEXT,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Chikuma" (
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
    "nextTimeStock2" INTEGER,
    "createdAt" TEXT
);

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
    "nextTimeStock3" INTEGER,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Tombow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "createdAt" TEXT
);
