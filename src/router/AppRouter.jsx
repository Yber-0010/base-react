import { RouterProvider, createHashRouter } from 'react-router-dom'
import { BackofficeRouter } from '../app/backoffice/router/BackofficeRouter';
import { LandingRouter } from '../app/landing/router/landingRouter';
import { AuthRouter } from '../app/auth/router/authRouter';
import { Error404 } from '../app/pages/error404';
import { BaseRouter } from './BaseRouter';

const baseRoute = 'index';
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
		<RouterProvider router={router} />
	)
}
