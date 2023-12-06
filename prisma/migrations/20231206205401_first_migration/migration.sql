-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
