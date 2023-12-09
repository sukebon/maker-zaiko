-- CreateTable
CREATE TABLE "Selery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jan" INTEGER NOT NULL,
    "stock" INTEGER,
    "productNumber" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "color" TEXT,
    "size" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT
);
