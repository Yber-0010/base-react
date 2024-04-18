import { Outlet ,Navigate } from 'react-router-dom';

export const AuthGuard = () => {

    const auth = false;

    return auth ? <Navigate to ='/'/> : <Navigate to="/dashboard" />;
}
