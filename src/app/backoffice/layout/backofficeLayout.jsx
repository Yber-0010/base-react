import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { AuthGuard } from "../../auth/guard/authGuard";

export const BackofficeLayout = () => {
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
						<Link to={`/`}>Home</Link>
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
			<AuthGuard route={'/'}/>
			{/* <Outlet /> */}
		</>
	)
}
