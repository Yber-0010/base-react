
import { useLocation, useNavigate } from 'react-router-dom'

export const AuthLogin = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem('auth', 'true')
    navigate('/dashboard/user')
  }

  return (
    <>
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
