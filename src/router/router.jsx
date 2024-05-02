import { Suspense } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom'

import { baseRedirectRouter } from './baseRedirect.routes';
import { authRoutes } from '../app/auth/router/auth.routes';
import { landingRoutes } from '../app/landing/router/landing.routes';
import { backofficeRouter } from '../app/backoffice/router/backoffice.routes';
import { Error404 } from '../app/pages/error404';
import { Loading } from '../app/components/loading';

const baseRoute = '/home';

const router = createHashRouter([
	{
		errorElement: <Error404 />,
		children: [
			baseRedirectRouter(baseRoute),
			authRoutes(),
			landingRoutes(),
			backofficeRouter(),
		],
	}
])

export const Router = () => {
	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider
				router={router}
				fallbackElement={<Loading />}
			/>
		</Suspense>
	)
}
