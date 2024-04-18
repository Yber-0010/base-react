import { Outlet ,Navigate } from 'react-router-dom';

export const AuthGuard = ({route}) => {
    console.log(route)

    const isAuth = localStorage.getItem('auth')
    console.log(isAuth)
    const auth = isAuth === 'true' ? true : false;

    return auth ? <Outlet/> : <Navigate to={route} />;
}
