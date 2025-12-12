import { http, HttpResponse } from 'msw';

export const dashboardHandlers = [
    http.get('*/api/dashboard/summary/', () => {
        return HttpResponse.json({
            stats: {
                totalCourses: 12,
                completedCourses: 4,
                hoursSpent: 156,
                averageScore: 92,
            },
            inProgress: [
                {
                    id: 1,
                    title: 'Advanced React Architecture',
                    progress: 65,
                    lastAccessed: new Date().toISOString(),
                },
                {
                    id: 2,
                    title: 'Django REST Framework Deep Dive',
                    progress: 30,
                    lastAccessed: new Date(Date.now() - 86400000).toISOString(),
                },
            ],
            activities: [
                {
                    id: 1,
                    type: 'lesson',
                    message: 'Completed lesson: React Query Basics',
                    timestamp: new Date().toISOString(),
                },
                {
                    id: 2,
                    type: 'quiz',
                    message: 'Scored 90% on TypeScript Quiz',
                    timestamp: new Date(Date.now() - 3600000).toISOString(),
                },
            ],
            analytics: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                values: [2, 4, 1.5, 3, 5, 2, 4],
            },
        });
    }),
];
