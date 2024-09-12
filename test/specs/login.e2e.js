import { expect } from '@wdio/globals';
import homeScreen from '../pageobjects/home.screen';
import loginScreen from '../pageobjects/login.screen';
import profileScreen from '../pageobjects/profile.screen';
import 'dotenv/config';

describe('Login', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.openMenu('profile')
        await loginScreen.login(process.env.EMAIL, process.env.PASSWORD)
        await homeScreen.openMenu('profile')
        expect((await profileScreen.profileName(process.env.USERNAME)).isDisplayed()).toBeTruthy()     
    })
})

