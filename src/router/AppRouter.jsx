import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error404 } from '../app/pages/error404';
import { About } from '../app/landing/pages/about';
import { LandinLayout } from '../app/landing/layout/landinLayout';
import { RouterBackoffice } from '../app/backoffice/router/routerBackoffice';
import { LandingRouter } from '../app/landing/router/landingRouter';

const router = createBrowserRouter([
	{	
		children: [
			LandingRouter(),
			RouterBackoffice(),
		]
	},
	{
		path: '/about',
		element: <About />,
	},

])

export const AppRouter = () => {
	return (
		<RouterProvider router={router} />
	)
}
