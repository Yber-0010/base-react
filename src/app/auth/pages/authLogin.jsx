
import { useNavigate } from 'react-router-dom'
import { MetaTags } from './../../helpers/MetaTags';

export const AuthLogin = ({ metaData }) => {

	const navigate = useNavigate();
	const login = () => {
		localStorage.setItem('auth', 'true')
		navigate('/dashboard/user')
	}

	return (
		<>
			<MetaTags metaData={metaData} />
			<h1>
				LOGIN
			</h1>
			<hr />
			<button
				onClick={login}
			>
				sign in
			</button>
		</>
	)
}
