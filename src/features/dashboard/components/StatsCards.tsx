import type { DashboardStats } from '../types';

interface StatsCardsProps {
    stats?: DashboardStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
    if (!stats) return null;

    const items = [
        { name: 'Total Courses', value: stats.totalCourses, color: 'bg-blue-500' },
        { name: 'Completed', value: stats.completedCourses, color: 'bg-green-500' },
        { name: 'Hours Spent', value: `${stats.hoursSpent}h`, color: 'bg-indigo-500' },
        { name: 'Avg Score', value: `${stats.averageScore}%`, color: 'bg-purple-500' },
    ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {items.map((item) => (
                <div key={item.name} className="overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                                    <dd>
                                        <div className="text-lg font-medium text-gray-900">{item.value}</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className={`h-1 w-full ${item.color}`} />
                </div>
            ))}
        </div>
    );
};
