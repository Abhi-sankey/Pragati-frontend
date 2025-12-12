import React from 'react';


interface AdminDashboardProps {
    data: any; // We can define stricter types later
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ data }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white overflow-hidden shadow rounded-lg p-5">
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{data?.stats?.totalStudents}</dd>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg p-5">
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Lessons</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{data?.stats?.activeLessons}</dd>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg p-5">
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Completion</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{data?.stats?.completionRate}%</dd>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg p-5">
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Score</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{data?.stats?.averageScore}%</dd>
                </div>
            </div>

            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Employee Progress Leaderboard</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Ranked by lesson completion percentage.</p>
                </div>
                <div className="border-t border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data?.leaderboard?.map((person: any, index: number) => (
                                <tr key={person.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${person.progress}%` }}></div>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1">{person.progress}%</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.lastActive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
