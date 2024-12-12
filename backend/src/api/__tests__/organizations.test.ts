const { createOrganization, getUserOrganizations, updateOrganization, deleteOrganization } = require('../organizations');
const { prismaMock } = require('../../test/setup');
const { Request, Response } = require('express');

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
        { id: '1', name: 'Org 1' },
        { id: '2', name: 'Org 2' }
      ];

      mockReq = {
        user: { id: 'user123' }
      };

      prismaMock.organization.findMany.mockResolvedValue(mockOrgs);

      await getUserOrganizations(mockReq as Request, mockRes as Response);

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
        focusAreas: ['climate', 'justice']
      };

      mockReq = {
        user: { id: 'user123' },
        body: orgData
      };

      const mockCreatedOrg = { ...orgData, id: 'org123' };
      prismaMock.organization.create.mockResolvedValue(mockCreatedOrg);

      await createOrganization(mockReq as Request, mockRes as Response);

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
