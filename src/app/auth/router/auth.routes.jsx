import { Suspense, lazy } from "react";
import { Loading } from "../../components/loading";
import { Error404 } from "../../pages/error404"
import { routes } from "./routes";
import { AuthGuard } from "../../guard/authGuard";

const AuthLayout = lazy(async () => await import('../layout/authLayout'));

export const authRouter = () => {

	const br = {
		path: '/',
		element:
			<AuthGuard>
				<AuthLayout />
			</AuthGuard>,
		errorElement:
			<Error404 />,
		children: [
			{
				path: '/auth',
				errorElement: <Error404 />,
				children: routes.map(({ path, element: Component, toyes, to, metadata }) => ({
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
	return br
}
