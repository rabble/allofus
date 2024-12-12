const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserOrganizations = async (req, res) => {
  try {
    const userId = req.user.id;
    const organizations = await prisma.organization.findMany({
      where: { createdById: userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
};

const createOrganization = async (req, res) => {
  try {
    const userId = req.user.id;
    const organization = await prisma.organization.create({
      data: {
        ...req.body,
        createdById: userId,
        focusAreas: JSON.stringify(req.body.focusAreas),
        engagementTypes: JSON.stringify(req.body.engagementTypes),
        locations: JSON.stringify(req.body.locations),
        contact: req.body.contact ? JSON.stringify(req.body.contact) : null,
        socialMedia: req.body.socialMedia ? JSON.stringify(req.body.socialMedia) : null,
        staff: req.body.staff ? JSON.stringify(req.body.staff) : null,
        supporter: req.body.supporter ? JSON.stringify(req.body.supporter) : null
      }
    });
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create organization' });
  }
};

const updateOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    const organization = await prisma.organization.findFirst({
      where: { id, createdById: userId }
    });
    
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    
    const updated = await prisma.organization.update({
      where: { id },
      data: {
        ...req.body,
        focusAreas: JSON.stringify(req.body.focusAreas),
        engagementTypes: JSON.stringify(req.body.engagementTypes),
        locations: JSON.stringify(req.body.locations),
        contact: req.body.contact ? JSON.stringify(req.body.contact) : null,
        socialMedia: req.body.socialMedia ? JSON.stringify(req.body.socialMedia) : null,
        staff: req.body.staff ? JSON.stringify(req.body.staff) : null,
        supporter: req.body.supporter ? JSON.stringify(req.body.supporter) : null
      }
    });
    
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update organization' });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    const organization = await prisma.organization.findFirst({
      where: { id, createdById: userId }
    });
    
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    
    await prisma.organization.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete organization' });
  }
};

module.exports = {
  getUserOrganizations,
  createOrganization,
  updateOrganization, 
  deleteOrganization
};
