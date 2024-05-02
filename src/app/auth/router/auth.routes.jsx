import { Error404 } from "../../pages/error404"
import { AuthLayout } from "../layout/authLayout"
import { Login } from "../pages/login"
import { AuthGuard } from '../../guard/authGuard';
import { authMetaData } from "./auth.metadata";


export const authRoutes = () => {
	const { authLogin } = authMetaData();
	const ar = {
		path: '/',
		element:
			<AuthGuard>
				<AuthLayout />
			</AuthGuard>,
		errorElement: <Error404 />,
		children: [
			{
				errorElement: <Error404 />,
				children: [
					{
						path: '/login',
						element: <Login metaData={authLogin} />,
					},
				]
			}
		]
	}
	return ar
}
