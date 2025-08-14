/*
  Warnings:

  - You are about to drop the `Batch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Grade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `batch` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Batch" DROP CONSTRAINT "Batch_accountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Batch" DROP CONSTRAINT "Batch_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Grade" DROP CONSTRAINT "Grade_accountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Grade" DROP CONSTRAINT "Grade_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Section" DROP CONSTRAINT "Section_accountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Section" DROP CONSTRAINT "Section_studentId_fkey";

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "batch" TEXT NOT NULL,
ADD COLUMN     "grade" TEXT NOT NULL,
ADD COLUMN     "section" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Batch";

-- DropTable
DROP TABLE "public"."Grade";

-- DropTable
DROP TABLE "public"."Section";
