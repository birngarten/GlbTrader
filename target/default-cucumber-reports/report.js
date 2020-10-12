$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US001.feature");
formatter.feature({
  "name": "Sign In",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UserSignIn"
    }
  ]
});
formatter.scenario({
  "name": "run Sign In test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserSignIn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "tc01 user writes true email and true password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc01_user_writes_true_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc02 user writes false email and true password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc02_user_writes_false_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc03 user writes true email and false password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc03_user_writes_true_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc04 user writes false email and false password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc04_user_writes_false_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US003.feature");
formatter.feature({
  "name": "Seller Join Now",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SellerJoinNow"
    }
  ]
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join now tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.seller_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC011\tSelect Vendor Type\u0027da \"Agent Seller\" secilebilir olmalidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerJoinNow"
    },
    {
      "name": "@agentSellerFormu1"
    }
  ]
});
formatter.step({
  "name": "tc11 user  Seller Join Now tiklasin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc11_user_Seller_Join_Now_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc11 user Select Vendor Type da  Agent Seller tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc11_user_Select_Vendor_Type_da_Agent_Seller_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc11   user Agent Seller buttononu aktif oldugunu test etsin.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc11_user_Agent_Seller_buttononu_aktif_oldugunu_test_etsin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join now tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.seller_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC012 Agent seller altinda ki form doldurulsun ve assert edilsin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerJoinNow"
    },
    {
      "name": "@agentSellerFormu2"
    }
  ]
});
formatter.step({
  "name": "tc12 user name  Text box a \"can\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_name_Text_box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user email Text Box a \"a@gmail.com\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_email_Text_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user subDomain \"www.abc.com\" url girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_subDomain_url_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user mobileNumberBoxa \"01605553480\" girsin ve asert etsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_mobileNumberBoxa_girsin_ve_asert_etsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user country Box  olarak \"Turkey\" secsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_country_Box_olarak_secsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user state Boxa \"usa\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_state_Boxa_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user city Boxa \"Florida\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_city_Boxa_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user adress Box a \"weidigweg 31,65647\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_adress_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user enter Postal Code Box a \"64293\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_enter_Postal_Code_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user categories bir alan secsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_categories_bir_alan_secsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user password Box a \"1235676\" sifre girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_password_Box_a_sifre_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc12 user Regisration tiklasin ve assert etsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc12_user_Regisration_tiklasin_ve_assert_etsin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join now tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.seller_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC013 Login Here butonuna tiklandiktan sonra acilan sekmede Email ve Password text box\u0027lari goruluyor olmalidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerJoinNow"
    },
    {
      "name": "@agentSellerFormu3"
    }
  ]
});
formatter.step({
  "name": "tc13 user Login Here butonuna tiklasin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc13_user_Login_Here_butonuna_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc13 user sonraki  linkde Email ve Password textleri assert etsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc13_user_sonraki_linkde_Email_ve_Password_textleri_assert_etsin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join now tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.seller_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC 014 Select Vendor Type\u0027da \"Company Seller\" secilebilir olmalidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerJoinNow"
    },
    {
      "name": "@companySellerFormu1"
    }
  ]
});
formatter.step({
  "name": "tc14 user  Select Vendor Type\u0027da Company Seller Butonnu secsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc14_user_Select_Vendor_Type_da_Company_Seller_Butonnu_secsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc14 user Company Seller Butonunu secildigi assert edilsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc14_user_Company_Seller_Butonunu_secildigi_assert_edilsin()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: utilities.ReusableMethods.getHexColor(Lorg/openqa/selenium/WebElement;Ljava/lang/String;)Ljava/lang/String;\r\n\tat stepdefinitions.US003StepDefinition.tc14_user_Company_Seller_Butonunu_secildigi_assert_edilsin(US003StepDefinition.java:173)\r\n\tat ✽.tc14 user Company Seller Butonunu secildigi assert edilsin(file:///C:/Users/fikir/IdeaProjects/GlbTrader/src/test/resources/features/US003.feature:37)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Seller Join now tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.seller_Join_now_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC015 Company Seller sayfasinin  text Boxlari doldurulsun ve assert edilsin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerJoinNow"
    },
    {
      "name": "@companySellerFormu2"
    }
  ]
});
formatter.step({
  "name": "tc15 user company Name \" sirket\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_company_Name_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user company Mobile \"+49\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_company_Mobile_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user company Adress \"weidigweg 34\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_company_Adress_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user name Box \"isim\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_name_Box_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user emailText Box \"sss@ggg.com\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_emailText_Box_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user subDomain \"www.gogle.com\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_subDomain_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user mobil Number \"05333338221\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_mobil_Number_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user country secsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_country_secsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user state Box \"usa\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_state_Box_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user city Box a \"Florida\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_city_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user addres Box \"buraya adresgir\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_addres_Box_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user postal Code Box a \"64291\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_postal_Code_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user categories den bir secim yapsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_categories_den_bir_secim_yapsin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 user password Box a \"123467\" girsin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_user_password_Box_a_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc15 registration tiklasin ve Succesfully ifadesini gorsun",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US003StepDefinition.tc15_registration_tiklasin_ve_Succesfully_ifadesini_gorsun()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//p[@class\u003d\u0027text-center\u0027])[2]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2AP8DN0\u0027, ip: \u0027172.20.10.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\fikir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 679564fb19272e5c4399e1469f1c85b7\n*** Element info: {Using\u003dxpath, value\u003d(//p[@class\u003d\u0027text-center\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat stepdefinitions.US003StepDefinition.tc15_registration_tiklasin_ve_Succesfully_ifadesini_gorsun(US003StepDefinition.java:281)\r\n\tat ✽.tc15 registration tiklasin ve Succesfully ifadesini gorsun(file:///C:/Users/fikir/IdeaProjects/GlbTrader/src/test/resources/features/US003.feature:56)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US004.feature");
formatter.feature({
  "name": "Seller Sign in testi",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SellerSignIn"
    }
  ]
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC016 seller Login butonu https://www.glbtrader.com/vendor_login.html sayfasina yönlendirmelidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign1"
    }
  ]
});
formatter.step({
  "name": "tc16 user \"https://www.glbtrader.com/vendor_login.html\" sayfasina gitsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc16_user_sayfasina_gitsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC017 sing In icin  negatif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSign2"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email icin negatif  gecersiz \"\u003cwrong email\u003e\" girsin",
  "keyword": "Given "
});
formatter.step({
  "name": "tc17 user enter Password icin  negatif gecersiz \"\u003cwrong password\u003e\" girsin",
  "keyword": "Then "
});
formatter.examples({
  "name": "Hatali veriler listesi",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "wrong email",
        "wrong password"
      ]
    },
    {
      "cells": [
        "a@g.",
        "...1"
      ]
    },
    {
      "cells": [
        "1@.",
        "abc"
      ]
    },
    {
      "cells": [
        "@.com",
        "can22"
      ]
    }
  ]
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  negatif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign2"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email icin negatif  gecersiz \"a@g.\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin  negatif gecersiz \"...1\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  negatif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign2"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email icin negatif  gecersiz \"1@.\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin  negatif gecersiz \"abc\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  negatif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign2"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email icin negatif  gecersiz \"@.com\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin  negatif gecersiz \"can22\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_negatif_gecersiz_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC017 sing In icin  pozitif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSign3"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email  icin pozitif  GECERLI \"\u003cemail\u003e\" girsin",
  "keyword": "Given "
});
formatter.step({
  "name": "tc17 user enter Password icin pozitif  gecerli \"\u003cpassword\u003e\" girsin",
  "keyword": "Then "
});
formatter.examples({
  "name": "Dogru veriler listesi",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "a@gmail.com",
        "aba234."
      ]
    },
    {
      "cells": [
        "aba1@a.com",
        "12345A."
      ]
    },
    {
      "cells": [
        "net@gmail.com",
        "bet2017!"
      ]
    }
  ]
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  pozitif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign3"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email  icin pozitif  GECERLI \"a@gmail.com\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_pozitif_GECERLI_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin pozitif  gecerli \"aba234.\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_pozitif_gecerli_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  pozitif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign3"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email  icin pozitif  GECERLI \"aba1@a.com\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_pozitif_GECERLI_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin pozitif  gecerli \"12345A.\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_pozitif_gecerli_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC017 sing In icin  pozitif testler yapilsin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign3"
    }
  ]
});
formatter.step({
  "name": "tc17 user enter your email  icin pozitif  GECERLI \"net@gmail.com\" girsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_your_email_icin_pozitif_GECERLI_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc17 user enter Password icin pozitif  gecerli \"bet2017!\" girsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc17_user_enter_Password_icin_pozitif_gecerli_girsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC018 Forgot Password menu linki https://www.glbtrader.com/vendor_forgot.html sayfasina yonlendirmelidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign4"
    }
  ]
});
formatter.step({
  "name": "tc18 user forgot Password linkine tiklasin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc18_user_forgot_Password_linkine_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc18 user linkini \"https://www.glbtrader.com/vendor_forgot.html\" assert etsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc18_user_linkini_assert_etsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC019 Sayfadaki text kutucuguna email yazilabilmeli ve Forgot Passwort butonuna tiklandiginda sayfa yenilenmelidir.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SellerSignIn"
    },
    {
      "name": "@SellerSign5"
    }
  ]
});
formatter.step({
  "name": "tc19 user enter your email kusutunsa \"email\" yazsin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc19_user_enter_your_email_kusutunsa_yazsin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc19 user enter your email kutusuna veri girdikten sonra Forgot Password tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc19_user_enter_your_email_kutusuna_veri_girdikten_sonra_Forgot_Password_tiklasin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc19 user fortgot password tiklandikdan sonra sayfanin yenilendigi test edilsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc19_user_fortgot_password_tiklandikdan_sonra_sayfanin_yenilendigi_test_edilsin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US005.feature");
formatter.feature({
  "name": "About us",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us005"
    }
  ]
});
formatter.scenario({
  "name": "US005 kullanici about us sayfasinda islem yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us005"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://www.glbtrader.com/\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.kullanici_sayfaya_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TC020 kullanici about us sayfasi tiklandiginda acilabilir oldugunu verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc020_kullanici_about_us_sayfasi_tiklandiginda_acilabilir_oldugunu_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TC021 kullanici about us title ve header about us olarak görüldügünü verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc021_kullanici_about_us_title_ve_header_about_us_olarak_görüldügünü_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TC022 kullanici tel nosunun \"1-212-217-1900\" oldugunu verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc022_kullanici_tel_nosunun_oldugunu_verify_eder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TC023 kullanici metnin icerigini verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc023_kullanici_metnin_icerigini_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US007.feature");
formatter.feature({
  "name": "All Categories Computer \u0026 Office Menu Linkinde Test Yapma",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us007"
    }
  ]
});
formatter.scenario({
  "name": "US007 kullanici computer \u0026 office menu linkinde urun aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://www.glbtrader.com/\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.kullanici_sayfaya_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc029 kullanici all categories de dropbox secenek sayisini bulur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc029_kullanici_all_categories_de_dropbox_secenek_sayisini_bulur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc030 kullanici besinci sirada computer\u0026office secer ve bir urun ismi girip sonuc alir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc030_kullanici_besinci_sirada_computer_office_secer_ve_bir_urun_ismi_girip_sonuc_alir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc031 kullanici computer\u0026office aranan urunun  sayfasinda  GLOBAL TRADER  logosu gorur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc031_kullanici_computer_office_aranan_urunun_sayfasinda_GLOBAL_TRADER_logosu_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc032 kullanici urunu All Categories,Computer and Office,Electronic Components \u0026 Supplies arar ve karsilastirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc032_kullanici_urunu_All_Categories_Computer_and_Office_Electronic_Components_Supplies_arar_ve_karsilastirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc033 kullanici ranan urunun  fiyati, resmi ve titlesinin gorunup gorunmedini verify edr",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc033_kullanici_ranan_urunun_fiyati_resmi_ve_titlesinin_gorunup_gorunmedini_verify_edr()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@style\u003d\u0027display: inline-block;\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2AP8DN0\u0027, ip: \u0027172.20.10.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\fikir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 679564fb19272e5c4399e1469f1c85b7\n*** Element info: {Using\u003dxpath, value\u003d//img[@style\u003d\u0027display: inline-block;\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.US007StepDefinition.tc033_kullanici_ranan_urunun_fiyati_resmi_ve_titlesinin_gorunup_gorunmedini_verify_edr(US007StepDefinition.java:96)\r\n\tat ✽.tc033 kullanici ranan urunun  fiyati, resmi ve titlesinin gorunup gorunmedini verify edr(file:///C:/Users/fikir/IdeaProjects/GlbTrader/src/test/resources/features/US007.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});