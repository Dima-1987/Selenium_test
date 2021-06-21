let webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;
 //   test = require('selenium-webdriver/testing');

describe('Google Search', function () //создание главной функции
{
    let driver;      // объявляем переменную для работы с браузером
    before(function () //функция содержащая параметры запуска браузера
    {
        let options = new chrome.Options; //создаем объект
        options.addArguments(["start-fullscreen"]) //указываем аргумент

      driver = new webdriver.Builder()
          .forBrowser('chrome') //указываем какой браузер запускаться
          .setChromeOptions(options) //применяем аргумент
          .build(); //Создается объект браузера
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
