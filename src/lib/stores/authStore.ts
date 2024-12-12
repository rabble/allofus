import { writable } from 'svelte/store';
import { apiClient } from '../api/client';

export const user = writable<{
  username: string;
  role: string;
} | null>(null);

export const isAuthenticated = writable(false);

export const login = async (username: string, password: string) => {
  const response = await apiClient.post('/auth/login', { username, password });
  user.set(response.user);
  isAuthenticated.set(true);
  return response;
};

export const logout = async () => {
  await apiClient.post('/auth/logout', {});
  user.set(null);
  isAuthenticated.set(false);
};

