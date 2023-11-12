/*
  Warnings:

  - The primary key for the `Build` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Build" DROP CONSTRAINT "Build_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Build_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Build_id_seq";
