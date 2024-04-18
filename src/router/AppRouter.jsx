import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error404 } from '../app/pages/error404';
import { Index } from '../app/landing/pages';
import { About } from '../app/landing/pages/about';
import { Product, loaderProduct } from './../app/landing/pages/product';
import { LandinLayout } from '../app/landing/layout/landinLayout';
import { Contact, preloadContact } from '../app/landing/pages/contact';
import { BackofficeDashboard } from '../app/backoffice/pages/backofficeDashboard';
import { AuthGuard } from '../app/auth/guard/authGuard';
import { AuthLogin } from './../app/auth/pages/authLogin';
import { Users } from '../app/backoffice/pages/users';
import { Tickets } from './../app/backoffice/pages/tickets';
import { BackofficeLayout } from '../app/backoffice/layout/backofficeLayout';
import { RouterBackoffice } from '../app/backoffice/router/routerBackoffice';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandinLayout />,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <Index />,
					},
					{
						path: 'product/:id',
						element: <Product />,
						loader: loaderProduct
					},
					{
						path: 'contact',
						element: <Contact />,
						loader: preloadContact,
					},
					{
						path: 'login',
						element: <AuthGuard />,
					},
					RouterBackoffice(),
					{
						path: '*',
						element: <Navigate to='/' />,
					}
				]
			}

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
