import { BackofficeGuard } from "../../guard/backofficeGuard";
import { Error404 } from "../../pages/error404"
import { BackofficeLayout } from "../layout/backofficeLayout"
import { Tickets } from "../pages/tickets"
import { Users } from "../pages/users"
import { Navigate } from 'react-router-dom';
import { BackofficeMetaData } from "./backofficeMetaData";

export const BackofficeRouter = () => {
	const { users, tickets } = BackofficeMetaData()
	const backofficeRouter = {
		path: '',
		element:
			<BackofficeGuard>
				<BackofficeLayout />
			</BackofficeGuard>,
		errorElement:
			<Error404 />,
		children: [
			{
				path: 'dashboard',
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <Navigate to='/dashboard/user' />,
					},
					{
						path: 'user',
						element: <Users metaData={users} />,
					},
					{
						path: 'tickets',
						element: <Tickets metaData={tickets} />,
					},
					{
						path: '*',
						element: <Navigate to="/dashboard/user" />,
					}
				]
			}
		]

	}
	return backofficeRouter
}
