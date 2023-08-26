-- CreateTable
CREATE TABLE "available" (
    "id" SERIAL NOT NULL,
    "barberName" TEXT NOT NULL,
    "selectedDays" JSONB NOT NULL,
    "selectedTimes" JSONB NOT NULL,

    CONSTRAINT "available_pkey" PRIMARY KEY ("id")
);
