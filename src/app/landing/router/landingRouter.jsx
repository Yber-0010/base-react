import { Navigate } from "react-router-dom"
import { AuthLogin } from "../../auth/pages/authLogin"
import { Error404 } from "../../pages/error404"
import { Index } from "../pages"
import { Contact, preloadContact } from "../pages/contact"
import { Product, loaderProduct } from "../pages/product"
import { LandinLayout } from "../layout/landinLayout"

export const LandingRouter = () => {
    const landingRouter = {
        path: '',
        element: <LandinLayout />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
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
                        element: <AuthLogin />,
                    },
                    {
                        path: '*',
                        element: <Navigate to='/' />,
                    }
                ]
            }
        ]

    }
    return landingRouter
}
