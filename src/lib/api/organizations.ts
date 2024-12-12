import { apiClient } from './client';

export const getUserOrganizations = async () => {
  return await apiClient.get('/organizations/user');
};
