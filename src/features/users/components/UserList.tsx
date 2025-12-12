import React from 'react';
import type { User, UserRole, UserStatus } from '../types';
import { Trash2 } from 'lucide-react';
import { clsx } from 'clsx';

interface UserListProps {
    users: User[];
    onDelete: (id: string) => void;
    isDeleting: boolean;
}

const statusStyles: Record<UserStatus, string> = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    suspended: 'bg-red-100 text-red-800',
};

const roleStyles: Record<UserRole, string> = {
    super_admin: 'text-purple-600 bg-purple-50 ring-purple-500/10',
    tutor: 'text-blue-600 bg-blue-50 ring-blue-500/10',
    employee: 'text-gray-600 bg-gray-50 ring-gray-500/10',
};

export const UserList: React.FC<UserListProps> = ({ users, onDelete, isDeleting }) => {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Role
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Last Active
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
                                        {user.avatarUrl ? (
                                            <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                                        ) : (
                                            user.name.charAt(0).toUpperCase()
                                        )}
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium text-gray-900">{user.name}</div>
                                        <div className="text-gray-500 text-xs">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span
                                    className={clsx(
                                        roleStyles[user.role],
                                        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    {user.role}
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span
                                    className={clsx(
                                        statusStyles[user.status],
                                        'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                                    )}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {user.lastActive ? new Date(user.lastActive).toLocaleDateString() : '-'}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <button
                                    onClick={() => onDelete(user.id)}
                                    disabled={isDeleting}
                                    className="text-red-400 hover:text-red-600 disabled:opacity-50 mx-2"
                                    title="Delete User"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                                {/* Edit button could go here */}
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-8 text-gray-500">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
