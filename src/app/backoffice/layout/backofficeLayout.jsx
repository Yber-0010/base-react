import { Outlet, Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { AuthGuard } from "../../auth/guard/authGuard";

export const BackofficeLayout = () => {
	console.log('se imprimio Auth', AuthGuard())
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('auth')
		navigate('/')
	}
    return AuthGuard() 
	? 
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
			<Outlet />
		</>
	: <Navigate to={'/'} />;

	
}
