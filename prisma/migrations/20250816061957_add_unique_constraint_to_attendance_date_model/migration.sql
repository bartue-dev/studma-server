/*
  Warnings:

  - A unique constraint covering the columns `[studentId,date]` on the table `AttendanceDate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AttendanceDate_studentId_date_key" ON "public"."AttendanceDate"("studentId", "date");
