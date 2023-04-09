/*
  Warnings:

  - You are about to drop the column `tags` on the `TargetAudience` table. All the data in the column will be lost.
  - Added the required column `tag` to the `TargetAudience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TargetAudience" DROP COLUMN "tags",
ADD COLUMN     "tag" "Audience" NOT NULL;
