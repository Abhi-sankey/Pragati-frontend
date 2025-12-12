import { http, HttpResponse, delay } from 'msw';

const adminStats = {
    totalStudents: 142,
    activeLessons: 24,
    completionRate: 78,
    averageScore: 88,
};

const employeeLeaderboard = [
    { id: 101, name: 'Alice Walker', department: 'Engineering', progress: 100, lastActive: '2023-11-20' },
    { id: 102, name: 'Bob Charlie', department: 'Marketing', progress: 92, lastActive: '2023-11-20' },
    { id: 103, name: 'Charlie Dave', department: 'Sales', progress: 85, lastActive: '2023-11-19' },
    { id: 104, name: 'David Eve', department: 'HR', progress: 45, lastActive: '2023-11-18' },
    { id: 105, name: 'Eve Frank', department: 'Engineering', progress: 10, lastActive: '2023-11-15' },
];

const tutorCourses = [
    { id: 1, title: 'Advanced React Patterns', students: 45, avgProgress: 60 },
    { id: 2, title: 'Typescript for Big Projects', students: 30, avgProgress: 40 },
    { id: 3, title: 'CSS Animations Mastery', students: 25, avgProgress: 80 },
];

const employeeData = {
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
};

export const dashboardHandlers = [
    http.get('/api/dashboard/admin', async () => {
        await delay(300);
        return HttpResponse.json({
            stats: adminStats,
            leaderboard: employeeLeaderboard,
        });
    }),

    http.get('/api/dashboard/tutor', async () => {
        await delay(300);
        return HttpResponse.json({
            courses: tutorCourses,
        });
    }),

    http.get('/api/dashboard/employee', async () => {
        await delay(300);
        return HttpResponse.json(employeeData);
    }),
];
