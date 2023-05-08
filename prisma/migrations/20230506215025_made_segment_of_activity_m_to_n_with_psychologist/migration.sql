/*
  Warnings:

  - You are about to drop the column `description` on the `SegmentOfActivity` table. All the data in the column will be lost.
  - You are about to drop the column `psychologistId` on the `SegmentOfActivity` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `TargetAudience` table. All the data in the column will be lost.
  - Changed the type of `segment` on the `SegmentOfActivity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "SegmentOfActivity" DROP CONSTRAINT "SegmentOfActivity_psychologistId_fkey";

-- AlterTable
ALTER TABLE "SegmentOfActivity" DROP COLUMN "description",
DROP COLUMN "psychologistId",
DROP COLUMN "segment",
ADD COLUMN     "segment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TargetAudience" DROP COLUMN "description";

-- CreateTable
CREATE TABLE "_PsychologistToSegmentOfActivity" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PsychologistToSegmentOfActivity_AB_unique" ON "_PsychologistToSegmentOfActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_PsychologistToSegmentOfActivity_B_index" ON "_PsychologistToSegmentOfActivity"("B");

-- AddForeignKey
ALTER TABLE "_PsychologistToSegmentOfActivity" ADD CONSTRAINT "_PsychologistToSegmentOfActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "Psychologist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PsychologistToSegmentOfActivity" ADD CONSTRAINT "_PsychologistToSegmentOfActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "SegmentOfActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
