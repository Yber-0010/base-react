import { Suspense } from "react"
import { Error404 } from './../../error404';
import { Loading } from './../../../components/loading';
import { LandinLayout } from '../layout/landinLayout';
import { routes } from "./routes"

export const landingRouter = () => {

	const lr = {
		path: '/',
		element: <LandinLayout />,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: routes.map(({ element: Component, metaData, path, loader }) => ({
					path: path,
					element: (
						<Suspense fallback={<Loading />}>
							<Component metaData={metaData} />
						</Suspense>
					),
					loader: loader ? loader : null

				}))
			}
		]

	}
	return lr
}
