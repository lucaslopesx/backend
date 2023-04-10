/*
  Warnings:

  - You are about to drop the column `psychologistId` on the `TargetAudience` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TargetAudience" DROP CONSTRAINT "TargetAudience_psychologistId_fkey";

-- AlterTable
ALTER TABLE "TargetAudience" DROP COLUMN "psychologistId";

-- CreateTable
CREATE TABLE "_PsychologistToTargetAudience" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PsychologistToTargetAudience_AB_unique" ON "_PsychologistToTargetAudience"("A", "B");

-- CreateIndex
CREATE INDEX "_PsychologistToTargetAudience_B_index" ON "_PsychologistToTargetAudience"("B");

-- AddForeignKey
ALTER TABLE "_PsychologistToTargetAudience" ADD CONSTRAINT "_PsychologistToTargetAudience_A_fkey" FOREIGN KEY ("A") REFERENCES "Psychologist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PsychologistToTargetAudience" ADD CONSTRAINT "_PsychologistToTargetAudience_B_fkey" FOREIGN KEY ("B") REFERENCES "TargetAudience"("id") ON DELETE CASCADE ON UPDATE CASCADE;
