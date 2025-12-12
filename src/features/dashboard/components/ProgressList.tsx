import type { CourseProgress } from '../types';

interface ProgressListProps {
    courses?: CourseProgress[];
}

export const ProgressList = ({ courses = [] }: ProgressListProps) => {
    return (
        <div className="rounded-lg bg-white shadow mb-8">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">In Progress</h3>
            </div>
            <ul role="list" className="divide-y divide-gray-200">
                {courses.map((course) => (
                    <li key={course.id} className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="truncate text-sm font-medium text-indigo-600">{course.title}</p>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                    <span>{course.progress}%</span>
                                </div>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex text-xs text-gray-500">
                                Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                            </div>
                        </div>
                    </li>
                ))}
                {courses.length === 0 && (
                    <li className="px-4 py-4 sm:px-6 text-gray-500 text-sm">No courses in progress.</li>
                )}
            </ul>
        </div>
    );
};
