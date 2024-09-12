import { $ } from '@wdio/globals'

class SignUpScreen {
    
    get signUpBtn() {
        return $('android=new UiSelector().text("Sign up")')
    }


    async signUpUser() {
        await this.signUpBtn.click()
        await driver.execute('mobile: scroll', { direction: 'up' })
    }
}

export default new SignUpScreen();