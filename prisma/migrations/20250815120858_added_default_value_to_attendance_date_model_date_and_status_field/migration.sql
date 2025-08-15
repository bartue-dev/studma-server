/*
  Warnings:

  - The `date` column on the `AttendanceDate` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."AttendanceDate" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "status" SET DEFAULT 'ABSENT';

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceDate_studentId_date_key" ON "public"."AttendanceDate"("studentId", "date");
