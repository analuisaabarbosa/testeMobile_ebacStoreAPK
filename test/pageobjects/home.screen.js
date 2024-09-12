import { $ } from '@wdio/globals'

class HomeScreen {
    async openMenu(menu) {
        await $(`id:tab-${menu}`).click()
    }
}

export default new HomeScreen();
