/*
  Warnings:

  - Added the required column `accountId` to the `AttendanceDate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."AttendanceDate" ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Batch" ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Grade" ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Section" ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Grade" ADD CONSTRAINT "Grade_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Section" ADD CONSTRAINT "Section_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AttendanceDate" ADD CONSTRAINT "AttendanceDate_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Batch" ADD CONSTRAINT "Batch_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;
