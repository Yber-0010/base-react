import { Navigate, useLocation } from "react-router-dom";
import { AuthGuard } from "./authGuard";

export const RequireAuthGuard = ({ children }) => {
    let auth = AuthGuard();
    let location = useLocation();
    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
