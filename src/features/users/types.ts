export type UserRole = 'super_admin' | 'tutor' | 'employee';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    lastActive?: string;
    avatarUrl?: string; // Optional avatar
}

export interface CreateUserDTO {
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
}
