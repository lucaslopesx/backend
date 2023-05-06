import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await targetAudienceSeed();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function targetAudienceSeed() {
  const targetAudiences: Prisma.TargetAudienceCreateInput[] = [
    {
      tag: 'CHILDREN',
    },
    {
      tag: 'TEENAGERS',
    },
    {
      tag: 'ADULTS',
    },
    {
      tag: 'SENIORS',
    },
  ];

  const segments: Prisma.SegmentOfActivityCreateInput[] = [
    {
      segment: 'Group therapy and workshops',
    },
    {
      segment: 'Psychotherapy and counseling',
    },
    {
      segment: 'Substance abuse and addiction treatment',
    },
    {
      segment: 'Career counseling and vocational assessment',
    },
    {
      segment: 'Sports psychology and performance enhancement',
    },
  ];

  for (const targetAudience of targetAudiences) {
    await prisma.targetAudience.create({
      data: {
        tag: targetAudience.tag,
      },
    });
  }

  for (const segmentOfActivity of segments) {
    await prisma.segmentOfActivity.create({
      data: {
        segment: segmentOfActivity.segment,
      },
    });
  }
}
