import { Error404 } from "../../pages/error404"
import { BackofficeLayout } from "../layout/backofficeLayout"
import { Tickets } from "../pages/tickets"
import { Users } from "../pages/users"
import { Navigate } from 'react-router-dom';

export const RouterBackoffice = () => {
    const auth = false;
    if (!auth) {
        return {}
    }
    const backofficeRouter = {
        path: 'dashboard',
        element: <BackofficeLayout />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Navigate to='/dashboard/user' />,
            },
            {
                path: 'user',
                element: <Users />,
            },
            {
                path: 'tickets',
                element: <Tickets />,
            },
            {
                path: '*',
                element: <Navigate to="/dashboard/user" />,
            }
        ]
    }
    return backofficeRouter
}
