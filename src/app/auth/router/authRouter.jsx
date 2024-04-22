import { Error404 } from "../../pages/error404"
import { AuthLayout } from "../layout/authLayout"
import { AuthLogin } from "../pages/authLogin"
import { AuthGuard } from '../../guard/authGuard';
import { AuthMetaData } from "./authMetaData";


export const AuthRouter = () => {
	const { authLogin } = AuthMetaData();
	const authRouter = {
		path: '',
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
						path: 'login',
						element: <AuthLogin metaData={authLogin} />,
					},
				]
			}
		]
	}
	return authRouter
}
