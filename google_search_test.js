var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;
 //   test = require('selenium-webdriver/testing');

describe('Google Search', function () //содание главной вункции
{
    var driver;      // объявляем переменную для работы с браузером
    before(function () //функция содержащая параметры запуска браузера
    {
      driver = new webdriver.Builder()
          .forBrowser('firefox') //указываем какой браузер запускаться
          .build(); //Создаеться объек браузера
    });

    it('name_test', function () //функция выполняющая тест
    {
      driver.get('https://www.google.com');
      driver.findElement(By.name('q')).sendKeys('hello');
      driver.findElement(By.name('btnG')).click();
      driver.wait(until.titleIs('hello - Google Search'), 10000);
    });
    after(() => driver && driver.quit());
});
