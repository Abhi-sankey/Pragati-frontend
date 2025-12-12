import React from 'react';
import { Greeting } from '../../../features/dashboard/components/Greeting';
import { StatsCards } from '../../../features/dashboard/components/StatsCards';
import { ProgressList } from '../../../features/dashboard/components/ProgressList';
import { ActivityFeed } from '../../../features/dashboard/components/ActivityFeed';
import { AnalyticsWidget } from '../../../features/dashboard/components/AnalyticsWidget';

interface EmployeeDashboardProps {
    data: any;
}

export const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ data }) => {
    return (
        <div className="space-y-8">
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
