import type { UserActivity } from '../types';

interface ActivityFeedProps {
    activities?: UserActivity[];
}

export const ActivityFeed = ({ activities = [] }: ActivityFeedProps) => {
    return (
        <div className="items-start space-y-4">
            <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
            <div className="flow-root">
                <ul role="list" className="-mb-8">
                    {activities.map((activity, activityIdx) => (
                        <li key={activity.id}>
                            <div className="relative pb-8">
                                {activityIdx !== activities.length - 1 ? (
                                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex space-x-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                        {/* Icon placeholder - using text for now */}
                                        <span className="text-xs font-bold text-gray-500">{activity.type[0].toUpperCase()}</span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {activity.message}
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            <time dateTime={activity.timestamp}>{new Date(activity.timestamp).toLocaleDateString()}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {activities.length === 0 && (
                        <p className="text-sm text-gray-500">No recent activity.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};
