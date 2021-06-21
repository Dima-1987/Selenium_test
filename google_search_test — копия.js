
const {By, Key, until } = require('selenium-webdriver')
const {ignore, suite } = require('selenium-webdriver/testing')

suite(function (env) {
  describe('Google Search', function () {
    let firefox_driver

    before(async function () {
      let path = require('C:\\Tools\\chromedriver.exe').path;
      let service = new firefox_driver.ServiceBuilder(path).build();
      firefox_driver.setDefaultService(service);

      firefox_driver = env.builder().forBrowser('chrome').build();

    })

    it('demo', async function () {
      await firefox_driver.get('https://www.google.com/ncr')
      await firefox_driver.findElement(By.name('q')).sendKeys('hello', Key.RETURN)
      await firefox_driver.wait(until.titleIs('hello - Google Search'), 1000)
    })

    after(() => firefox_driver && firefox_driver.quit())
  })
})
