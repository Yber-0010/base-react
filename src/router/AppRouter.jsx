import { RouterProvider, createHashRouter } from 'react-router-dom'
import { BackofficeRouter } from '../app/backoffice/router/BackofficeRouter';
import { LandingRouter } from '../app/landing/router/landingRouter';
import { AuthRouter } from '../app/auth/router/authRouter';
import { Error404 } from '../app/pages/error404';
import { BaseRouter } from './BaseRouter';
import { Suspense } from 'react';

const baseRoute = '/index';
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
		<Suspense fallback={ <span>Loading...</span> }>
			<RouterProvider 
			router={router} 
			fallbackElement={<span>load....</span>}
			/>
		</Suspense>
	)
}
