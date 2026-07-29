import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoApiNumbers = ["42-389-34190-00", "60-812-90123-00", "UK-21-04A-09", "NG-54-90122-00", "CODEX-TEMP-001"];
const demoUserEmails = ["admin@wellqc.com", "petro@wellqc.com", "data@wellqc.com", "geo@wellqc.com"];
const demoOperatorNames = ["ExxonMobil", "Shell Offshore", "Chevron", "BP", "Equinor", "CODEX_TEST_OPERATOR"];
const demoFieldNames = [
  "Wolfcamp Permian",
  "Mississippi Canyon GOM",
  "Forties Field",
  "Niger Delta Deepwater",
  "Wolfcamp Shale",
  "Mississippi Canyon",
  "CODEX_TEST_FIELD",
];

async function main() {
  const demoWells = await prisma.well.findMany({
    where: { apiNo: { in: demoApiNumbers } },
    select: { id: true },
  });
  const demoWellIds = demoWells.map((well) => well.id);

  await prisma.activityLog.deleteMany({
    where: {
      OR: [
        { targetId: { in: demoWellIds } },
        { details: { contains: "WOLFCAMP" } },
        { details: { contains: "MISSISSIPPI_CANYON" } },
        { details: { contains: "FORTIES" } },
        { details: { contains: "NIGER_DELTA" } },
        { details: { contains: "CODEX_TEMP" } },
        { details: { contains: "CODEX_TEST" } },
        { details: { contains: "UNKNOWN_WELL" } },
        { user: { email: { in: demoUserEmails } } },
        { userName: { in: ["Dr. Sarah Jenkins", "Alexandre Dubois", "Marcus Vance", "Elena Rostova"] } },
      ],
    },
  });

  const deletedWells = await prisma.well.deleteMany({
    where: { apiNo: { in: demoApiNumbers } },
  });

  const deletedUsers = await prisma.user.deleteMany({
    where: { email: { in: demoUserEmails } },
  });

  const deletedFields = await prisma.field.deleteMany({
    where: { name: { in: demoFieldNames } },
  });

  const deletedOperators = await prisma.operator.deleteMany({
    where: { name: { in: demoOperatorNames } },
  });

  console.log(
    JSON.stringify(
      {
        deletedWells: deletedWells.count,
        deletedUsers: deletedUsers.count,
        deletedFields: deletedFields.count,
        deletedOperators: deletedOperators.count,
      },
      null,
      2,
    ),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
