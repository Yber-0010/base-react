import { Suspense } from "react";
import { Loading } from "../../components/loading";
import { Error404 } from "../../pages/error404"
import { backofficeRoutes } from "./routes";

export const BackofficeRouter = () => {

	const backofficeRouter = {
		path: '/',
		async lazy() {
			let { BackofficeGuard } = await import("../../guard/backofficeGuard");
			let { BackofficeLayout } = await import("../layout/backofficeLayout");
			return { element: <BackofficeGuard><BackofficeLayout /></BackofficeGuard> };
		},
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
