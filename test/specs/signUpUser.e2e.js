import homeScreen from '../screenobjects/home.screen'
import signupScreen from "../screenobjects/signup.screen";

describe('Sign up user', () => {
    it('must successfully register a user', async () => {
        await homeScreen.openMenu('profile')
        await signupScreen.signUpUser()
        await homeScreen.validateSearchText("Search Products")
    });
});