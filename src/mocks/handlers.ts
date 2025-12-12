import { dashboardHandlers } from '../features/dashboard/dashboard.msw';
import { usersHandlers } from '../features/users/users.msw';

export const handlers = [
    ...dashboardHandlers,
    ...usersHandlers,
];
