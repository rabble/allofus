const { PrismaClient } = require('@prisma/client');
const { mockDeep } = require('jest-mock-extended');

const prismaMock = mockDeep();

// Mock the prisma client
jest.mock('../lib/prisma', () => ({
  prisma: prismaMock
}));

beforeEach(() => {
  jest.clearAllMocks();
});

module.exports = {
  prismaMock
};
