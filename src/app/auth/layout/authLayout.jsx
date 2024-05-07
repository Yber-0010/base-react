import { Link, Outlet } from "react-router-dom"


export const AuthLayout = () => {
	return (
		<>
			<div>AuthLayout</div>
			<ul>
				<li>
					<Link to={`/home`}>Home</Link>
				</li>
			</ul>
			<Outlet />
		</>
	)
}

export default AuthLayout