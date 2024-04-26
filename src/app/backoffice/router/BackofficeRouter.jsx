import { BackofficeGuard } from "../../guard/backofficeGuard";
import { Suspense } from "react";
import { Loading } from "../../components/loading";
import { Error404 } from "../../pages/error404"
import { BackofficeLayout } from "../layout/backofficeLayout"
// import { Tickets } from "../pages/tickets"
// import { Users } from "../pages/users"
// import { Navigate } from 'react-router-dom';
import { BackofficeMetaData } from "./backofficeMetaData";
import { backofficeRoutes } from "./routes";

export const BackofficeRouter = () => {
	const { users, tickets } = BackofficeMetaData()
	const backofficeRouter = {
		path: '/',
		async lazy() {
			let { BackofficeGuard } = await import("../../guard/backofficeGuard");
			let { BackofficeLayout } = await import("../layout/backofficeLayout");
			return { element: <BackofficeGuard><BackofficeLayout /></BackofficeGuard>};
		},
		errorElement:
			<Error404 />,
		children: [
			{
				path: '/dashboard',
				errorElement: <Error404 />,
				// children: [
				// 	{
				// 		index: true,
				// 		async lazy() {
				// 			let { Navigate } = await import("react-router-dom");
				// 			return { element: <Navigate to='/dashboard/user' />};
				// 		},
				// 	},
				// 	{
				// 		path: 'user',
				// 		async lazy() {
				// 			let { Users } = await import("../pages/users");
				// 			return { element: <Users metaData={users} />};
				// 		}
				// 	},
				// 	{
				// 		path: 'tickets',
				// 		async lazy() {
				// 			let { Tickets } = await import("../pages/tickets");
				// 			return { element: <Tickets metaData={tickets} />};
				// 		},
				// 	},
				// 	{
				// 		path: '*',
				// 		async lazy() {
				// 			let { Navigate } = await import("react-router-dom");
				// 			return { element: <Navigate to="/dashboard/user" />};
				// 		},
				// 	}
				// ]
				// children: [
				// 	{
				// 		index: true,
				// 		async lazy() {
				// 			let { Navigate } = await import("react-router-dom");
				// 			return { element: <Navigate to='/dashboard/user' />};
				// 		},
				// 	},
				// 	backofficeRoutes.map(({path,metadata,Component}) => ({
				// 		path: path,
				// 		element: <Component metaData={metadata} />
				// 	})),
				// 	{
				// 		path: '*',
				// 		async lazy() {
				// 			let { Navigate } = await import("react-router-dom");
				// 			return { element: <Navigate to="/dashboard/user" />};
				// 		},
				// 	}
				// ] 
				// todo arreglar redireccionado
				children: 
					// {
					// 	index: true,
					// 	async lazy() {
					// 		let { Navigate } = await import("react-router-dom");
					// 		return { element: <Navigate to='/dashboard/user' />};
					// 	},
					// },
					backofficeRoutes.map(({ path, metadata, element: Component, toyes,to }) => ({
						path: path,
						element: (
							<Suspense fallback={<Loading />}>
								{toyes ? (
									<Component to={to} />
								):(
									<Component metaData={metadata} />
								)}
							</Suspense>
						)
					}))
					// {
					// 	path: '*',
					// 	async lazy() {
					// 		let { Navigate } = await import("react-router-dom");
					// 		return { element: <Navigate to="/dashboard/user" />};
					// 	},
					// }
				
			}
		]

	}
	return backofficeRouter
}
