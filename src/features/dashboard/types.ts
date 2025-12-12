export interface DashboardStats {
    totalCourses: number;
    completedCourses: number;
    hoursSpent: number;
    averageScore: number;
}

export interface CourseProgress {
    id: number;
    title: string;
    progress: number;
    lastAccessed: string; // ISO date
    thumbnailUrl?: string;
}

export interface UserActivity {
    id: number;
    type: 'quiz' | 'lesson' | 'comment' | 'enrollment';
    message: string;
    timestamp: string;
}

export interface AnalyticsData {
    labels: string[];
    values: number[];
}

export interface DashboardData {
    stats: DashboardStats;
    inProgress: CourseProgress[];
    activities: UserActivity[];
    analytics: AnalyticsData;
}
