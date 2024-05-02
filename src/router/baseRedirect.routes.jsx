import { Navigate } from "react-router-dom"
import { Error404 } from "../app/pages/error404"


export const baseRedirectRouter = (baseroute = '/') => {

	const brr = {
		path: '',
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <Navigate exact to={baseroute} />,
					},
					{
						path: '*',
						element: <Navigate to='/' />,
					}
				]
			}
		]

	}
	return brr
}
