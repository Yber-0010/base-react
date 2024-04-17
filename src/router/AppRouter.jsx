import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error404 } from '../app/pages/error404';
import { Index } from '../app/landing/pages';
import { About } from '../app/landing/pages/about';
import { Product } from './../app/landing/pages/product';
import { LandinLayout } from '../app/landing/layout/landinLayout';
import { Contact, preloadContact } from '../app/landing/pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandinLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'contact',
        element: <Contact />,
        loader: preloadContact,
      },
      
    ]
  },
  {
    path: '/about',
    element: <About />,
  },
  
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
