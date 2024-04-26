import { Suspense } from "react"
import { Navigate } from "react-router-dom"
import { Error404 } from "../../pages/error404"
import { Index } from "../pages"
import { Contact, preloadContact } from "../pages/contact"
import { LandinLayout } from "../layout/landinLayout"
import { About } from "../pages/about"
import { LandingMetaData } from "./landingMetaData"
import { landingRoutes } from "./routes"
import { Loading } from "../../components/loading"

export const LandingRouter = () => {
	const { index, product, contact, about } = LandingMetaData()
	const landingRouter = {
		path: '/',
		element: <LandinLayout />,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: landingRoutes.map(({element:Component, metaData, path, loader}) => ({
					path: path,
					element: (
						<Suspense fallback={ <Loading/> }>
                            <Component metaData={metaData} />
						</Suspense>
					),
					loader: loader? loader: null
					
				}))
			}
		]

	}
	return landingRouter
}
