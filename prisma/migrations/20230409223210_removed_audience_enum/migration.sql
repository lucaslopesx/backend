/*
  Warnings:

  - Changed the type of `tag` on the `TargetAudience` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TargetAudience" DROP COLUMN "tag",
ADD COLUMN     "tag" TEXT NOT NULL;
