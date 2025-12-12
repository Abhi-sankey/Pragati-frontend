import { create } from 'zustand';
import type { User, UserRole } from '../../users/types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (role: UserRole) => void;
    logout: () => void;
}

const MOCK_USERS: Record<UserRole, User> = {
    super_admin: {
        id: 'admin-1',
        name: 'Super Admin',
        email: 'admin@pragati.com',
        role: 'super_admin',
        status: 'active',
        avatarUrl: 'https://ui-avatars.com/api/?name=Super+Admin&background=6366f1&color=fff',
    },
    tutor: {
        id: 'tutor-1',
        name: 'Alex Tutor',
        email: 'tutor@pragati.com',
        role: 'tutor',
        status: 'active',
        avatarUrl: 'https://ui-avatars.com/api/?name=Alex+Tutor&background=10b981&color=fff',
    },
    employee: {
        id: 'emp-1',
        name: 'John Employee',
        email: 'employee@pragati.com',
        role: 'employee',
        status: 'active',
        avatarUrl: 'https://ui-avatars.com/api/?name=John+Employee&background=f59e0b&color=fff',
    },
};

export const useAuthStore = create<AuthState>((set) => ({
    user: MOCK_USERS.super_admin, // Default to admin for dev
    isAuthenticated: true,
    login: (role: UserRole) => {
        set({
            user: MOCK_USERS[role],
            isAuthenticated: true,
        });
    },
    logout: () => {
        set({ user: null, isAuthenticated: false });
    },
}));
