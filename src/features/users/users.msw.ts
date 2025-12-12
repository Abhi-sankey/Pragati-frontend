import { http, HttpResponse, delay } from 'msw';
import type { User } from './types';

// Mock data initialization
const initialUsers: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'super_admin',
        status: 'active',
        lastActive: '2023-11-20T10:30:00Z',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'tutor',
        status: 'active',
        lastActive: '2023-11-19T14:20:00Z',
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice.j@example.com',
        role: 'employee',
        status: 'inactive',
        lastActive: '2023-10-05T09:00:00Z',
    },
];

// Simple in-memory storage for the session
// Note: In a real app with MSW, creating a persistent store is better, 
// but for simple demo purposes, a module-level variable works until refresh unless we use localStorage.
let users = [...initialUsers];

export const usersHandlers = [
    http.get('/api/users', async () => {
        await delay(500); // Simulate network latency
        return HttpResponse.json(users);
    }),

    http.post('/api/users', async ({ request }) => {
        await delay(500);
        const newUserCtx = (await request.json()) as Omit<User, 'id' | 'lastActive'>;

        const newUser: User = {
            id: String(Math.floor(Math.random() * 10000)), // Simple ID generation
            ...newUserCtx,
            lastActive: new Date().toISOString(),
        };

        users.push(newUser);
        return HttpResponse.json(newUser, { status: 201 });
    }),

    http.delete('/api/users/:id', async ({ params }) => {
        await delay(500);
        const { id } = params;

        const existingUserIndex = users.findIndex((u) => u.id === id);

        if (existingUserIndex === -1) {
            return new HttpResponse(null, { status: 404 });
        }

        users = users.filter((u) => u.id !== id);
        return new HttpResponse(null, { status: 200 });
    }),
];
