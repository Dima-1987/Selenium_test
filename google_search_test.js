let webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;

describe('Google Search', function () //создание главной функции
{
    let driver;      // объявляем переменную для работы с браузером
    before(function () //функция содержащая параметры запуска браузера
    {
        let options = new chrome.Options; //создаем объект
        options.addArguments(["start-fullscreen"]); //указываем параметр запуска браузера с командной строки

        // options.addExtensions("путь к файлу расширения ctx"); //запуск браузера с необходимым расширением
        // options.setChromeBinaryPath("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe") //явное указание пути запускаемого браузера


               driver = new webdriver.Builder()
            .withCapabilities({'unexpectedAlertBehaviour': 'dismiss'})// запуск браузера с аргументами
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


      driver.manage().addCookie({'name':"test", 'value':"test"});
      driver.getCapabilities().then(function (caps) {console.log(caps);});//вывод в лог информации по подключенным аргументам
      driver.manage().getCookies().then(function (cookies){console.log ('cookie details => ', cookies)});




    });
    after(() => driver && driver.quit());
});
