$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US014.feature");
formatter.feature({
  "name": "US014 GlbTrader SelectLanguage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SelectLanguage"
    }
  ]
});
formatter.background({
  "name": "user glbTrader sayfasindadir",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user glbTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US012StepDefinitions.user_glbTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user SelectLanguage box\u0027a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US014StepDefinitions.user_SelectLanguage_box_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC069 Dil secenegi \"Almanca\" ve \"Ingilizce\" tiklayinca acilan yeni sayfanin ilgili dilde acildigini",
  "description": "  verify ediniz.",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SelectLanguage"
    },
    {
      "name": "@tc_069"
    }
  ]
});
formatter.step({
  "name": "TC069 Almanca tiklandiginda Almanca dilinde verify ediniz.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US014StepDefinitions.tc069_Almanca_tiklandiginda_Almanca_dilinde_verify_ediniz()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//span[@class\u003d\u0027icon_widh\u0027])[1]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-12C1QN5\u0027, ip: \u0027192.168.178.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:10387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fb2ac71188aee70bb764958027f63553\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027icon_widh\u0027])[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepdefinitions.US014StepDefinitions.tc069_Almanca_tiklandiginda_Almanca_dilinde_verify_ediniz(US014StepDefinitions.java:101)\r\n\tat ✽.TC069 Almanca tiklandiginda Almanca dilinde verify ediniz.(file:///C:/Users/LENOVO/IdeaProjects/GlbTrader/src/test/resources/features/US014.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "TC069 Ingilizce tiklandiginda Ingilizce dilinde verify ediniz.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US014StepDefinitions.tc069_Ingilizce_tiklandiginda_Ingilizce_dilinde_verify_ediniz()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});