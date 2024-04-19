import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterBackoffice } from '../app/backoffice/router/routerBackoffice';
import { LandingRouter } from '../app/landing/router/landingRouter';
import { AuthRouter } from '../app/auth/router/authRouter';

const router = createBrowserRouter([
	{	
		children: [
			AuthRouter(),
			LandingRouter(),
			RouterBackoffice(),
		]
	}
])

export const AppRouter = () => {
	return (
		<RouterProvider router={router} />
	)
}
