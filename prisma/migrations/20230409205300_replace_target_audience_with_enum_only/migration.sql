/*
  Warnings:

  - You are about to drop the `TargetAudience` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NewTargetAudience" AS ENUM ('CHILDREN', 'TEENAGERS', 'ADULTS', 'SENIORS');

-- DropForeignKey
ALTER TABLE "TargetAudience" DROP CONSTRAINT "TargetAudience_psychologistId_fkey";

-- AlterTable
ALTER TABLE "Psychologist" ADD COLUMN     "targetAudiences" "NewTargetAudience"[];

-- DropTable
DROP TABLE "TargetAudience";

-- DropEnum
DROP TYPE "Audience";
