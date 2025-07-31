-- CreateTable
CREATE TABLE "public"."Batch" (
    "batchId" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("batchId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Batch_studentId_key" ON "public"."Batch"("studentId");

-- AddForeignKey
ALTER TABLE "public"."Batch" ADD CONSTRAINT "Batch_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
