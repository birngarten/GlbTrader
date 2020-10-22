$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US002.feature");
formatter.feature({
  "name": "US002 User Join Now",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UserJoinNow"
    }
  ]
});
formatter.scenario({
  "name": "tc005  gecerli Sign in test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC005"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Sign Up yazisini assert etsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Sign_Up_yazisini_assert_etsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Mobile_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Password kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Password_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Confirm Password kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Confirm_Password_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Sign Up butonuna tiklayabilmelidir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Sign_Up_butonuna_tiklayabilmelidir()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //div[@class\u003d\u0027alert alert-success\u0027]\u0027 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat stepdefinitions.US002StepDefinition.tc005_user_Sign_Up_butonuna_tiklayabilmelidir(US002StepDefinition.java:83)\r\n\tat ✽.tc005 user Sign Up butonuna tiklayabilmelidir(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027alert alert-success\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-BILGISAYAR\u0027, ip: \u0027192.168.178.47\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58985}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a9d0c072e5ca0f0e11fd27daf837fef8\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-success\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepdefinitions.US002StepDefinition.tc005_user_Sign_Up_butonuna_tiklayabilmelidir(US002StepDefinition.java:83)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\r\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:362)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\r\n\tat java.base/java.lang.Thread.run(Thread.java:832)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "tc006 Gecersiz Email Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC006"
    }
  ]
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "tc006 user Email \"\u003cWrongEmail\u003e\" girer",
  "keyword": "And "
});
formatter.examples({
  "name": "Wrong Email Test",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "WrongEmail"
      ]
    },
    {
      "cells": [
        "glbtradermail.com"
      ]
    },
    {
      "cells": [
        "@mail.com"
      ]
    },
    {
      "cells": [
        "glbtrader@.com"
      ]
    },
    {
      "cells": [
        "glbtrader@mail."
      ]
    }
  ]
});
formatter.scenario({
  "name": "tc006 Gecersiz Email Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc006 user Email \"glbtradermail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc006_user_Email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc006 Gecersiz Email Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc006 user Email \"@mail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc006_user_Email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc006 Gecersiz Email Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc006 user Email \"glbtrader@.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc006_user_Email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc006 Gecersiz Email Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc006 user Email \"glbtrader@mail.\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc006_user_Email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "tc007 Gecersiz Name Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC007"
    }
  ]
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc007 user Name \"\u003cWrongName\u003e\" girer",
  "keyword": "Then "
});
formatter.examples({
  "name": "Wrong Email Test",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "WrongName"
      ]
    },
    {
      "cells": [
        "ABC1 C3"
      ]
    },
    {
      "cells": [
        "3ABC 3L"
      ]
    },
    {
      "cells": [
        "abc5 b5"
      ]
    },
    {
      "cells": [
        "8abc 9a"
      ]
    }
  ]
});
formatter.scenario({
  "name": "tc007 Gecersiz Name Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc007 user Name \"ABC1 C3\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc007_user_Name_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"ABC1 C3\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc007 Gecersiz Name Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc007 user Name \"3ABC 3L\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc007_user_Name_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"3ABC 3L\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc007 Gecersiz Name Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc007 user Name \"abc5 b5\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc007_user_Name_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"abc5 b5\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc007 Gecersiz Name Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc007 user Name \"8abc 9a\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc007_user_Name_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"8abc 9a\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "tc008 Gecersiz Mobile Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC008"
    }
  ]
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc008 user Mobile \"\u003cWrongMobile\u003e\" girer",
  "keyword": "Then "
});
formatter.examples({
  "name": "Wrong Mobile Test",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "WrongMobile"
      ]
    },
    {
      "cells": [
        "0533A4562"
      ]
    },
    {
      "cells": [
        "A05335623"
      ]
    },
    {
      "cells": [
        "05334961a"
      ]
    },
    {
      "cells": [
        "a05334466"
      ]
    }
  ]
});
formatter.scenario({
  "name": "tc008 Gecersiz Mobile Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC008"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc008 user Mobile \"0533A4562\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"0533A4562\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc008 Gecersiz Mobile Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC008"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc008 user Mobile \"A05335623\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"A05335623\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc008 Gecersiz Mobile Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC008"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc008 user Mobile \"05334961a\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"05334961a\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc008 Gecersiz Mobile Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC008"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc008 user Mobile \"a05334466\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"a05334466\" girer(file:///C:/Users/Administrator/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "tc009 Gecersiz Password Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC009"
    }
  ]
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.step({
  "name": "tc009 user Password \"\u003cWrongPassword\u003e\" girer",
  "keyword": "Then "
});
formatter.examples({
  "name": "Wrong Password Test",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "WrongPassword"
      ]
    },
    {
      "cells": [
        "Abc1"
      ]
    },
    {
      "cells": [
        "aS1"
      ]
    },
    {
      "cells": [
        "5s"
      ]
    },
    {
      "cells": [
        "6"
      ]
    }
  ]
});
formatter.scenario({
  "name": "tc009 Gecersiz Password Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC009"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Mobile_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc009 user Password \"Abc1\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc009_user_Password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc009 Gecersiz Password Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC009"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Mobile_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc009 user Password \"aS1\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc009_user_Password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc009 Gecersiz Password Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC009"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Mobile_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc009 user Password \"5s\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc009_user_Password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc009 Gecersiz Password Testi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC009"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Email kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Email_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Name kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Name_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc005 user Mobile kutusuna gecerli text girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc005_user_Mobile_kutusuna_gecerli_text_girsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc009 user Password \"6\" girer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc009_user_Password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc010 Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC010"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc010 user Login Here yazisina tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_Login_Here_yazisina_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc010 user yeni acilan sayfada Email ve Password text box\u0027lari goruluyor olmalidir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_yeni_acilan_sayfada_Email_ve_Password_text_box_lari_goruluyor_olmalidir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc010 user password hatirlamiyor ise Forgot Password kutusuna tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_password_hatirlamiyor_ise_Forgot_Password_kutusuna_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc010 user Email kutusu oldugu ve veri gonderimi yapilabildigini assert etsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_Email_kutusu_oldugu_ve_veri_gonderimi_yapilabildigini_assert_etsin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});