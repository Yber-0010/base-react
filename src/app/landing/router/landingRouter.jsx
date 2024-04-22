import { Navigate } from "react-router-dom"
import { Error404 } from "../../pages/error404"
import { Index } from "../pages"
import { Contact, preloadContact } from "../pages/contact"
import { Product, loaderProduct } from "../pages/product"
import { LandinLayout } from "../layout/landinLayout"
import { About } from "../pages/about"
import { LandingMetaData } from "./landingMetaData"

export const LandingRouter = () => {
	const { index, product, contact, about } = LandingMetaData()
	const landingRouter = {
		path: '',
		element: <LandinLayout />,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: [
					{
						path: 'index',
						element: <Index metaData={index} />,
					},
					{
						path: 'product/:id',
						element: <Product metaData={product} />,
						loader: loaderProduct
					},
					{
						path: 'contact',
						element: <Contact metaData={contact} />,
						loader: preloadContact,
					},
					{
						path: 'about',
						element: <About metaData={about} />,
					},
				]
			}
		]

	}
	return landingRouter
}
