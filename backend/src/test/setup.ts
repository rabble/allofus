import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

// Mock Prisma Client
export const prismaMock = mockDeep<PrismaClient>();
jest.mock('../lib/prisma', () => ({
  prisma: prismaMock
}));

beforeEach(() => {
  jest.clearAllMocks();
});
