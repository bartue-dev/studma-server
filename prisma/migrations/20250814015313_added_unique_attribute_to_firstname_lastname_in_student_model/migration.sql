/*
  Warnings:

  - A unique constraint covering the columns `[firstname,lastname]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_firstname_lastname_key" ON "public"."Student"("firstname", "lastname");
