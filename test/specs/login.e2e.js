import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import loginPage from '../pageobjects/login.page'
import profilePage from '../pageobjects/profile.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('ana@luisa.barbosa.com.br', 'anaLuisa97!')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Barbosa Ana Luisa')).isDisplayed()).toBeTruthy()     
    })
})

