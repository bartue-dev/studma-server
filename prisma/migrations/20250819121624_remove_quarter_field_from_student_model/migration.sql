/*
  Warnings:

  - You are about to drop the column `quarter` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "quarter";

-- DropEnum
DROP TYPE "public"."QuarterValue";
