/*
  Warnings:

  - You are about to drop the `Quarter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Quarter" DROP CONSTRAINT "Quarter_accountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quarter" DROP CONSTRAINT "Quarter_studentId_fkey";

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "quarter" "public"."QuarterValue" NOT NULL DEFAULT 'first';

-- DropTable
DROP TABLE "public"."Quarter";
