import { $ } from '@wdio/globals'

class HomeScreen {
    async openMenu(menu) {
        await $(`id:tab-${menu}`).click()
    }

    async validateSearchText(wordValidation) {
        $(`android=new UiSelector().text("${wordValidation}")`)
    }
}

export default new HomeScreen();
