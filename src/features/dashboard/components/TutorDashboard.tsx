import React from 'react';
import { BookOpen, Users as UsersIcon, TrendingUp } from 'lucide-react';

interface TutorDashboardProps {
    data: any;
}

export const TutorDashboard: React.FC<TutorDashboardProps> = ({ data }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Courses & Student Progress</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data?.courses?.map((course: any) => (
                    <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-indigo-900">{course.title}</h3>
                                <BookOpen className="h-5 w-5 text-indigo-500" />
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-sm text-gray-500">
                                    <UsersIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                    Active Students
                                </div>
                                <span className="font-semibold text-gray-900">{course.students}</span>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <TrendingUp className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                        Avg. Progress
                                    </div>
                                    <span className="font-semibold text-gray-900">{course.avgProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: `${course.avgProgress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
