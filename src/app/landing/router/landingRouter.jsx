import { Suspense } from "react"
import { Error404 } from "../../pages/error404"
import { LandinLayout } from "../layout/landinLayout"
import { landingRoutes } from "./routes"
import { Loading } from "../../components/loading"

export const LandingRouter = () => {

	const landingRouter = {
		path: '/',
		element: <LandinLayout />,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: landingRoutes.map(({ element: Component, metaData, path, loader }) => ({
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
	return landingRouter
}
