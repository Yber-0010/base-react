import { Suspense } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom'

import { BaseRouter } from './BaseRouter';
import { AuthRouter } from '../app/auth/router/authRouter';
import { LandingRouter } from '../app/landing/router/landingRouter';
import { BackofficeRouter } from '../app/backoffice/router/BackofficeRouter';
import { Error404 } from '../app/pages/error404';
import { Loading } from '../app/components/loading';

const baseRoute = '/home';

const router = createHashRouter([
	{
		errorElement: <Error404 />,
		children: [
			BaseRouter(baseRoute),
			AuthRouter(),
			LandingRouter(),
			BackofficeRouter(),
		],
	}
])

export const AppRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider
				router={router}
				fallbackElement={<Loading />}
			/>
		</Suspense>
	)
}
