import { Suspense } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Error404 } from '../app/pages/error404';
import { Loading } from '../app/components/loading';

import { baseRedirectRouter } from './baseRedirect.routes';
import { authRouter } from './../app/pages/auth';
import { landingRouter } from '../app/pages/landing';
import { backofficeRouter } from '../app/pages/backoffice';

const baseRoute = '/home';

const router = createHashRouter([
	{
		errorElement: <Error404 />,
		children: [
			baseRedirectRouter(baseRoute),
			landingRouter(),
			authRouter(),
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
