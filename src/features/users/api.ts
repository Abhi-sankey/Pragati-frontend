import axios from 'axios';
import type { User, CreateUserDTO } from './types';

// In a real app, this would probably be configured in a central axios instance
const api = axios.create({
    baseURL: '/api',
});

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
};

export const createUser = async (user: CreateUserDTO): Promise<User> => {
    const response = await api.post('/users', user);
    return response.data;
};

export const deleteUser = async (userId: string): Promise<void> => {
    await api.delete(`/users/${userId}`);
};
