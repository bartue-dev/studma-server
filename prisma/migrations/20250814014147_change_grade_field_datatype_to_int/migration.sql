/*
  Warnings:

  - Changed the type of `grade` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "grade",
ADD COLUMN     "grade" INTEGER NOT NULL;
