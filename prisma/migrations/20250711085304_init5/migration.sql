-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "logId" INTEGER;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "logId" INTEGER;

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_logId_fkey" FOREIGN KEY ("logId") REFERENCES "Log"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_logId_fkey" FOREIGN KEY ("logId") REFERENCES "Log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
