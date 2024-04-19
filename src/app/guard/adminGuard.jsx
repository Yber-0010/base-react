import { Navigate, useLocation } from 'react-router-dom';
import { AuthGuard } from './authGuard';

export const AdminGuard = ({ children }) => {
    let auth = AuthGuard();
    let location = useLocation();
    if (auth) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
    return children;
}
