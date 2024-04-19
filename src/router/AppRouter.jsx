import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterBackoffice } from '../app/backoffice/router/routerBackoffice';
import { LandingRouter } from '../app/landing/router/landingRouter';

const router = createBrowserRouter([
	{	
		children: [
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
