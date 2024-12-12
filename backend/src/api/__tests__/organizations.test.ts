import { createOrganization, getUserOrganizations, updateOrganization, deleteOrganization } from '../organizations/controllers';
import { PrismaClient } from '@prisma/client';
import { prismaMock } from '../../test/setup';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

describe('Organization API', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnThis();
    mockRes = {
      json: mockJson,
      status: mockStatus
    };
  });

  describe('getUserOrganizations', () => {
    it('should return user organizations', async () => {
      const mockOrgs = [
        { 
          id: '1', 
          name: 'Org 1',
          description: 'Test Org 1',
          category: 'nonprofit',
          focusAreas: '["climate"]',
          engagementTypes: '["online"]',
          locations: '["remote"]',
          contact: null,
          socialMedia: null,
          logo: null,
          joinNowLink: null,
          membersCount: null,
          staff: null,
          supporter: null,
          approved: false,
          createdById: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
          website: null
        },
        { 
          id: '2', 
          name: 'Org 2',
          description: 'Test Org 2',
          category: 'nonprofit',
          focusAreas: '["climate"]',
          engagementTypes: '["online"]',
          locations: '["remote"]',
          contact: null,
          socialMedia: null,
          logo: null,
          joinNowLink: null,
          membersCount: null,
          staff: null,
          supporter: null,
          approved: false,
          createdById: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
          website: null
        }
      ];

      mockReq = {
        user: { id: 'user123' }
      };

      prismaMock.organization.findMany.mockResolvedValue(mockOrgs);

      await getUserOrganizations(mockReq, mockRes);

      expect(prismaMock.organization.findMany).toHaveBeenCalledWith({
        where: { createdById: 'user123' },
        orderBy: { createdAt: 'desc' }
      });
      expect(mockJson).toHaveBeenCalledWith(mockOrgs);
    });
  });

  describe('createOrganization', () => {
    it('should create new organization', async () => {
      const orgData = {
        name: 'New Org',
        description: 'Test org',
        category: 'nonprofit',
        focusAreas: ['climate', 'justice'],
        engagementTypes: ['online'],
        locations: ['remote'],
        contact: null,
        socialMedia: null,
        logo: null,
        joinNowLink: null,
        membersCount: null,
        staff: null,
        supporter: null,
        approved: false,
        website: null
      };

      mockReq = {
        user: { id: 'user123' },
        body: orgData
      };

      const mockCreatedOrg = {
        id: 'org123',
        name: orgData.name,
        description: orgData.description,
        category: orgData.category,
        focusAreas: JSON.stringify(orgData.focusAreas),
        engagementTypes: JSON.stringify(orgData.engagementTypes),
        locations: JSON.stringify(orgData.locations),
        contact: null,
        socialMedia: null,
        logo: null,
        joinNowLink: null,
        membersCount: null,
        staff: null,
        supporter: null,
        approved: false,
        website: null,
        createdById: 'user123',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      prismaMock.organization.create.mockResolvedValue(mockCreatedOrg);

      await createOrganization(mockReq, mockRes);

      expect(prismaMock.organization.create).toHaveBeenCalledWith({
        data: {
          ...orgData,
          createdById: 'user123',
          focusAreas: JSON.stringify(orgData.focusAreas)
        }
      });
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(mockCreatedOrg);
    });
  });
});
