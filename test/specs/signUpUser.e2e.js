import homeScreen from "../pageobjects/home.screen";
import signupScreen from "../pageobjects/signup.screen";

describe('Sign up user', () => {
    it('Must successfully register a user', async () => {
        await homeScreen.openMenu('profile')
        await signupScreen.signUpUser()
    });
});