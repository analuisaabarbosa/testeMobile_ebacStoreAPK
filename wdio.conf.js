import 'dotenv/config'

export const config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: process.env.SAUCE_HOSTNAME,
    port: Number(process.env.SAUCE_PORT),
    baseUrl: process.env.SAUCE_PATH,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '10',
        "appium:disableIdLocatorAutocompletion": true,
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebac Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.11.0',
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }   
}