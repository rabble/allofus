import { apiClient } from '../api/client';
import { user, isAuthenticated } from '../stores/authStore';

export const checkAuth = async (): Promise<boolean> => {
    try {
        const response = await apiClient.get('/auth/me');
        user.set(response);
        isAuthenticated.set(true);
        return true;
    } catch (error) {
        user.set(null);
        isAuthenticated.set(false);
        return false;
    }
};
