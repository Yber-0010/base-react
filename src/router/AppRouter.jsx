import { RouterProvider, createHashRouter } from 'react-router-dom'
import { BackofficeRouter } from '../app/backoffice/router/BackofficeRouter';
import { LandingRouter } from '../app/landing/router/landingRouter';
import { AuthRouter } from '../app/auth/router/authRouter';

const router = createHashRouter([
	{
		children: [
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
