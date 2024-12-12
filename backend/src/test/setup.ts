import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { prisma } from '../lib/prisma'

export type Context = {
  prisma: PrismaClient
}

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  }
}

export const prismaMock = mockDeep<PrismaClient>()

// Mock the prisma client
jest.mock('../lib/prisma', () => ({
  prisma: prismaMock,
}))

beforeEach(() => {
  jest.clearAllMocks()
})
