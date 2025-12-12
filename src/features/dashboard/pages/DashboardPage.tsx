import { useDashboardData } from '../hooks/useDashboardData';
import { Greeting } from '../components/Greeting';
import { StatsCards } from '../components/StatsCards';
import { ProgressList } from '../components/ProgressList';
import { ActivityFeed } from '../components/ActivityFeed';
import { AnalyticsWidget } from '../components/AnalyticsWidget';

export const DashboardPage = () => {
    const { data, isLoading, isError } = useDashboardData();

    if (isLoading) return <div className="p-8">Loading dashboard...</div>;
    if (isError) return <div className="p-8 text-red-500">Error loading dashboard data.</div>;

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <Greeting />
            <StatsCards stats={data?.stats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <ProgressList courses={data?.inProgress} />
                    <AnalyticsWidget />
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white shadow rounded-lg p-6">
                        <ActivityFeed activities={data?.activities} />
                    </div>
                </div>
            </div>
        </div>
    );
};
