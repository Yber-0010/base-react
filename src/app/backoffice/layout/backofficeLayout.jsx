import { Outlet, Link, NavLink, useNavigate, Navigate, useLoaderData } from "react-router-dom";

export const BackofficeLayout = () => {
	console.log('se imprimio layout')
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('auth')
		navigate('/')
	}

	return (
		<>
			<div>BackofficeLayout</div>
			<nav>
				<ul>
					<li>
						<Link to={`index`}>Home</Link>
					</li>
					<li>
						<Link to={`dashboard/user`}>users</Link>
					</li>
					<li>
						<Link to={`dashboard/tickets`}>tickets</Link>
					</li>
					<li>
						<button onClick={logout}>logout</button>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)

}
