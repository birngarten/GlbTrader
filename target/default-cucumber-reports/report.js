$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US004.feature");
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
});