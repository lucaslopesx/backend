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
      description: 'Target audience for children patients',
      tag: 'CHILDREN',
    },
    {
      description: 'Target audience for teenage patients',
      tag: 'TEENAGERS',
    },
    {
      description: 'Target audience for adult patients',
      tag: 'ADULTS',
    },
    {
      description: 'Target audience for senior patients',
      tag: 'SENIORS',
    },
  ];

  for (const targetAudience of targetAudiences) {
    await prisma.targetAudience.create({
      data: {
        description: targetAudience.description,
        tag: targetAudience.tag,
      },
    });
  }
}
