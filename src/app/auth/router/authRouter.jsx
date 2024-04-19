import { Error404 } from "../../pages/error404"
import { AuthLayout } from "../layout/authLayout"
import { AuthLogin } from "../pages/authLogin"
import { AdminGuard } from './../../guard/adminGuard';


export const AuthRouter = () => {
	const authRouter = {
		path: '',
		element: 
			<AdminGuard>
				<AuthLayout />
			</AdminGuard>,
		errorElement: <Error404 />,
		children: [
			{
				path: '/',
				errorElement: <Error404 />,
				children: [
					{
						path: 'login',
						element: <AuthLogin />,
					},
				]
			}
		]
	}
	return authRouter
}
