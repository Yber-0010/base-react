import { Error404 } from "../../pages/error404"
import { AuthLayout } from "../layout/authLayout"
import { AuthLogin } from "../pages/authLogin"
import { AuthGuard } from '../../guard/authGuard';


export const AuthRouter = () => {
	const authRouter = {
		path: '',
		element: 
			<AuthGuard>
				<AuthLayout />
			</AuthGuard>,
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
