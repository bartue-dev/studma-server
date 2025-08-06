-- DropIndex
DROP INDEX "public"."AttendanceDate_date_key";

-- AlterTable
ALTER TABLE "public"."AttendanceDate" ALTER COLUMN "date" SET DATA TYPE TEXT;
