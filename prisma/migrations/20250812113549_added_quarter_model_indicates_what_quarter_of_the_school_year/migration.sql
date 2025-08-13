-- CreateEnum
CREATE TYPE "public"."QuarterValue" AS ENUM ('first', 'second', 'third', 'fourth');

-- CreateTable
CREATE TABLE "public"."Quarter" (
    "quarterId" TEXT NOT NULL,
    "quarter" "public"."QuarterValue" NOT NULL DEFAULT 'first',
    "accountId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Quarter_pkey" PRIMARY KEY ("quarterId")
);

-- AddForeignKey
ALTER TABLE "public"."Quarter" ADD CONSTRAINT "Quarter_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Teacher"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Quarter" ADD CONSTRAINT "Quarter_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("studentId") ON DELETE CASCADE ON UPDATE CASCADE;
