class AuthenticationService
{
    registerSuccessfulLogin(username,passoword)
    {
        console.log("Session Storage");
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }
}
export default new AuthenticationService()