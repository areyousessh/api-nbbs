/*
  Warnings:

  - Added the required column `clientName` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "schedules" ADD COLUMN     "clientName" TEXT NOT NULL;
