import { apiClient } from '../../services/apiClient';
import type { DashboardData } from './types';

export const dashboardApi = {
    getSummary: async () => {
        const response = await apiClient.get<DashboardData>('/dashboard/summary/');
        return response.data;
    }
};
