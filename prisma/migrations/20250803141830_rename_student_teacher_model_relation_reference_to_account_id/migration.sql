/*
  Warnings:

  - You are about to drop the column `teacherId` on the `Student` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_teacherId_fkey";

-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "teacherId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
