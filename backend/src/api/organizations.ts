import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getOrganizations = async (userId: string) => {
  return await prisma.organization.findMany({
    where: { createdById: userId },
    orderBy: { createdAt: 'desc' }
  });
};
