import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("WellQC+ seed completed: no demo records are created.");
  console.log("Upload and commit LAS files from the app to populate wells, reports, and dashboard metrics.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
