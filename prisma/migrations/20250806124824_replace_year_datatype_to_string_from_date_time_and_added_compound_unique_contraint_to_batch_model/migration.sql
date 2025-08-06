/*
  Warnings:

  - A unique constraint covering the columns `[studentId,year]` on the table `Batch` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Batch" ALTER COLUMN "year" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Batch_studentId_year_key" ON "public"."Batch"("studentId", "year");
