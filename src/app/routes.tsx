import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import { Layout } from '../components/Layout';
import { UsersPage } from '../features/users/pages/UsersPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <DashboardPage />,
            },
            {
                path: '/users',
                element: <UsersPage />,
            },
        ],
    },
]);
