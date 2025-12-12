import { useAuthStore } from '../../auth/stores/useAuthStore';
import { useAdminDashboard, useTutorDashboard, useEmployeeDashboard } from '../hooks/useDashboardData';
import { AdminDashboard } from '../components/AdminDashboard';
import { TutorDashboard } from '../components/TutorDashboard';
import { EmployeeDashboard } from '../components/EmployeeDashboard';

export const DashboardPage = () => {
    const { user } = useAuthStore();

    // Fetch data for all, but only the active one will be used.
    // In a real app, conditional fetching (using `enabled` option in react-query) is better performance-wise.
    const adminQuery = useAdminDashboard();
    const tutorQuery = useTutorDashboard();
    const employeeQuery = useEmployeeDashboard();

    if (!user) return <div>Please log in...</div>;

    const renderDashboard = () => {
        switch (user.role) {
            case 'super_admin':
                if (adminQuery.isLoading) return <div>Loading Admin Dashboard...</div>;
                return <AdminDashboard data={adminQuery.data} />;
            case 'tutor':
                if (tutorQuery.isLoading) return <div>Loading Tutor Dashboard...</div>;
                return <TutorDashboard data={tutorQuery.data} />;
            case 'employee':
                if (employeeQuery.isLoading) return <div>Loading My Learning...</div>;
                return <EmployeeDashboard data={employeeQuery.data} />;
            default:
                return <div>Unknown Role</div>;
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {renderDashboard()}
        </div>
    );
};
