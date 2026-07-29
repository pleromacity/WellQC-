import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding WellQC+ database...');

  // Create Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@wellqc.com' },
    update: {},
    create: {
      email: 'admin@wellqc.com',
      name: 'Dr. Sarah Jenkins',
      passwordHash: 'admin123',
      role: 'ADMIN',
      department: 'Enterprise Data Management',
    },
  });

  const petro = await prisma.user.upsert({
    where: { email: 'petro@wellqc.com' },
    update: {},
    create: {
      email: 'petro@wellqc.com',
      name: 'Alexandre Dubois',
      passwordHash: 'petro123',
      role: 'PETROPHYSICIST',
      department: 'Subsurface Evaluation',
    },
  });

  // Create Fields & Operators
  const permian = await prisma.field.upsert({
    where: { name: 'Wolfcamp Permian' },
    update: {},
    create: { name: 'Wolfcamp Permian', basin: 'Delaware Basin', country: 'USA', region: 'West Texas' },
  });

  const gom = await prisma.field.upsert({
    where: { name: 'Mississippi Canyon GOM' },
    update: {},
    create: { name: 'Mississippi Canyon GOM', basin: 'Gulf of Mexico', country: 'USA', region: 'Offshore GOM' },
  });

  const exxon = await prisma.operator.upsert({
    where: { name: 'ExxonMobil' },
    update: {},
    create: { name: 'ExxonMobil', code: 'XOM', contactEmail: 'petrophysics@exxonmobil.com' },
  });

  // Create Sample Wells
  const wellsData = [
    {
      apiNo: '42-389-34190-00',
      name: 'WOLFCAMP_PROD_01',
      operatorName: exxon.name,
      fieldName: permian.name,
      basin: 'Delaware Basin',
      country: 'USA',
      latitude: 31.750,
      longitude: -103.500,
      elevFt: 2850,
      tdFt: 14200,
      status: 'ACTIVE',
      qualityScore: 94,
      qualityGrade: 'EXCELLENT',
    },
    {
      apiNo: '60-812-90123-00',
      name: 'MISSISSIPPI_CANYON_block544',
      operatorName: exxon.name,
      fieldName: gom.name,
      basin: 'Gulf of Mexico',
      country: 'USA',
      latitude: 28.210,
      longitude: -89.420,
      elevFt: 85,
      tdFt: 22400,
      status: 'DRILLING',
      qualityScore: 86,
      qualityGrade: 'GOOD',
    },
  ];

  for (const w of wellsData) {
    const createdWell = await prisma.well.upsert({
      where: { apiNo: w.apiNo },
      update: {
        qualityScore: w.qualityScore,
        qualityGrade: w.qualityGrade,
      },
      create: w,
    });

    const lasFile = await prisma.lASFile.create({
      data: {
        wellId: createdWell.id,
        originalName: `${w.name}.las`,
        fileSizeKb: 142.5,
        lasVersion: '2.0',
        startDepth: 10000.0,
        stopDepth: 10200.0,
        stepDepth: 0.5,
        nullValue: -999.25,
        depthUnit: 'FT',
        rawHeader: '~VERSION INFORMATION\nVERS. 2.0',
        curveCount: 7,
        pointCount: 401,
        uploadedById: petro.id,
      },
    });

    const report = await prisma.qualityReport.create({
      data: {
        wellId: createdWell.id,
        lasFileId: lasFile.id,
        overallScore: w.qualityScore,
        qualityGrade: w.qualityGrade,
        completenessScore: 95,
        consistencyScore: 92,
        anomalyCount: 2,
        aiSummary: `Automated petrophysical QA inspection for ${w.name}. Log quality is benchmarked as ${w.qualityGrade} with high fidelity across key petrophysical channels.`,
        recommendations: JSON.stringify(['Execute automated median filtering despiking routine on affected depth intervals.']),
        reportJson: JSON.stringify({ overallScore: w.qualityScore }),
      },
    });

    await prisma.activityLog.create({
      data: {
        userId: petro.id,
        userName: petro.name,
        userRole: petro.role,
        action: 'UPLOAD_LAS',
        targetType: 'WELL',
        targetId: createdWell.id,
        details: `Validated LAS file for well ${createdWell.name}. Overall Quality Score: ${w.qualityScore}/100.`,
      },
    });
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
