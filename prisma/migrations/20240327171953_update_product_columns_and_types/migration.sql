/*
  Warnings:

  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL;
