

import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';
import { useAuthStore } from '../features/auth/stores/useAuthStore';
import type { UserRole } from '../features/users/types';

export const Layout = () => {
    const location = useLocation();
    const { user, login } = useAuthStore();

    // Navigation items with role access control
    // If roles is undefined, allowed for everyone
    const navigationList = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'User Management', href: '/users', icon: Users, roles: ['super_admin'] },
    ];

    const navigation = navigationList.filter(item =>
        !item.roles || (user && item.roles.includes(user.role as string))
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 mb-8">
                        <GraduationCap className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Pragati</span>
                    </div>

                    {/* User Profile Summary */}
                    <div className="px-4 mb-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={user?.avatarUrl}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                                <div className="text-xs font-medium text-gray-500 capitalize">{user?.role.replace('_', ' ')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col px-3">
                        <nav className="flex-1 space-y-1">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={clsx(
                                            isActive
                                                ? 'bg-indigo-50 text-indigo-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={clsx(
                                                isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Role Switcher for Demo */}
                    <div className="px-3 pb-6 mt-auto border-t border-gray-200 pt-4">
                        <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Role Switcher (Demo)
                        </p>
                        <div className="space-y-1">
                            {(['super_admin', 'tutor', 'employee'] as UserRole[]).map((role) => (
                                <button
                                    key={role}
                                    onClick={() => login(role)}
                                    className={clsx(
                                        user?.role === role ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center px-2 py-2 text-xs font-medium rounded-md capitalize'
                                    )}
                                >
                                    {role.replace('_', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile header (simplified) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                    <span className="ml-2 text-lg font-bold text-gray-900">Pragati</span>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 md:ml-64 flex flex-col pt-14 md:pt-0">
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
