import { Suspense, lazy } from "react";
import { Loading } from "../../components/loading";
import { Error404 } from "../../pages/error404"
import { backofficeRoutes } from "./routes";
import { BackofficeGuard } from './../../guard/backofficeGuard';

const BackofficeLayout = lazy(async () => await import('./../layout/backofficeLayout'));

export const BackofficeRouter = () => {

	const backofficeRouter = {
		path: '/',
		element:
			<BackofficeGuard>
				<BackofficeLayout />
			</BackofficeGuard>,
		errorElement:
			<Error404 />,
		children: [
			{
				path: '/dashboard',
				errorElement: <Error404 />,
				children: backofficeRoutes.map(({ path, metadata, element: Component, toyes, to }) => ({
					path: path,
					element: (
						<Suspense fallback={<Loading />}>
							{toyes ? (
								<Component to={to} />
							) : (
								<Component metaData={metadata} />
							)}
						</Suspense>
					)
				}))
			}
		]

	}
	return backofficeRouter
}
