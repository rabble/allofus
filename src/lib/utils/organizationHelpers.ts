interface OrganizationInput {
  name: string;
  description: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  focusAreas: string[];
}

export const serializeOrganization = (data: OrganizationInput) => {
  return {
    ...data,
    focusAreas: JSON.stringify(data.focusAreas)
  };
};

export const deserializeOrganization = (organization: any) => {
  return {
    ...organization,
    focusAreas: JSON.parse(organization.focusAreas)
  };
}; 