/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstname` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Account_firstname_key";

-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_username_key" ON "public"."Teacher"("username");
