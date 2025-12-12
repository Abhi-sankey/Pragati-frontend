import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const useAdminDashboard = () => useQuery({
    queryKey: ['dashboard', 'admin'],
    queryFn: async () => (await api.get('/dashboard/admin')).data,
});

export const useTutorDashboard = () => useQuery({
    queryKey: ['dashboard', 'tutor'],
    queryFn: async () => (await api.get('/dashboard/tutor')).data,
});

export const useEmployeeDashboard = () => useQuery({
    queryKey: ['dashboard', 'employee'],
    queryFn: async () => (await api.get('/dashboard/employee')).data,
});

// Deprecated: kept for compatibility if needed, but should move to role-specific
export const useDashboardData = () => useQuery({
    queryKey: ['dashboard', 'summary'],
    queryFn: async () => (await api.get('/dashboard/summary')).data,
});
