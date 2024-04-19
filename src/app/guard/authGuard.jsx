export const AuthGuard = () => {
    const isAuth = localStorage.getItem('auth')
    const auth = isAuth === 'true' ? true : false;
    return auth
}
