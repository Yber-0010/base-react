
export const useCheckAuthenticated = () => {
    const isAuth = localStorage.getItem('auth')
    const auth = isAuth === 'true' ? true : false;
    return auth
}
