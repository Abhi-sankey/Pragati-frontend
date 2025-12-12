import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import App from '../App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <DashboardPage />,
            },
            // Other routes will go here
        ],
    },
]);
