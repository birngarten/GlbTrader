<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US014.feature");
formatter.feature({
  "name": "US014 GlbTrader SelectLanguage",
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US013.feature");
formatter.feature({
  "name": "US013 test",
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US005.feature");
formatter.feature({
  "name": "About us",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US001.feature");
formatter.feature({
  "name": "Sign In",
>>>>>>> zehra
>>>>>>> master
=======
>>>>>>> master
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US002.feature");
formatter.feature({
  "name": "US002 User Join Now",
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@SelectLanguage"
    }
  ]
});
formatter.background({
  "name": "user glbTrader sayfasindadir",
  "description": "",
  "keyword": "Background"
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
      "name": "@US013"
=======
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
>>>>>>> master
=======
>>>>>>> master
      "name": "@UserJoinNow"
>>>>>>> master
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "tc059",
=======
<<<<<<< HEAD
  "name": "US005 kullanici about us sayfasinda islem yapar",
=======
  "name": "run Sign In test",
>>>>>>> zehra
>>>>>>> master
=======
  "name": "tc005  gecerli Sign in test",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      "name": "@US013"
=======
      "name": "@UserJoinNow"
    },
    {
      "name": "@TC005"
>>>>>>> master
    }
  ]
});
formatter.before({
  "status": "passed"
<<<<<<< HEAD
=======
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
=======
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
  "status": "passed"
});
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"ABC1 C3\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"3ABC 3L\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"abc5 b5\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc007_user_Name_girer(US002StepDefinition.java:101)\r\n\tat ✽.tc007 user Name \"8abc 9a\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:35)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"0533A4562\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", null);
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"A05335623\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"05334961a\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
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
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c5\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefinitions.US002StepDefinition.tc008_user_Mobile_girer(US002StepDefinition.java:109)\r\n\tat ✽.tc008 user Mobile \"a05334466\" girer(file:///C:/Users/saltu/IdeaProjects/GlbTrader/src/test/resources/features/US002.feature:50)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", null);
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
>>>>>>> master
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US009.feature");
formatter.feature({
  "name": "Women clothing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC043 Bu ürünün anasayfa search box ile",
  "description": "  aranıp bulunabildiğini assert edin.",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tc043"
    },
    {
      "name": "@us009"
>>>>>>> master
    }
  ]
>>>>>>> master
});
>>>>>>> master
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user glbTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US012StepDefinitions.user_glbTrader_sayfasina_gider()"
=======
<<<<<<< HEAD
  "name": "user asserts there are four parcels in page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_asserts_there_are_parcels_in_page()"
=======
<<<<<<< HEAD
  "name": "kullanici \"https://www.glbtrader.com/\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.kullanici_sayfaya_gider(java.lang.String)"
=======
  "name": "tc01 user writes true email and true password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc01_user_writes_true_email_and_true_password()"
>>>>>>> zehra
>>>>>>> master
>>>>>>> master
=======
  "name": "user GlobalTrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_GlobalTrader_sayfasina_gider()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc060",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
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
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
=======
formatter.step({
  "name": "user Join now tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.user_Join_now_tiklar()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user veryfies the website",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_the_website()"
=======
  "name": "tc010 user Login Here yazisina tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_Login_Here_yazisina_tiklasin()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc061",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
    }
  ]
=======
<<<<<<< HEAD
formatter.step({
  "name": "TC020 kullanici about us sayfasi tiklandiginda acilabilir oldugunu verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc020_kullanici_about_us_sayfasi_tiklandiginda_acilabilir_oldugunu_verify_eder()"
=======
formatter.step({
  "name": "tc010 user yeni acilan sayfada Email ve Password text box\u0027lari goruluyor olmalidir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_yeni_acilan_sayfada_Email_ve_Password_text_box_lari_goruluyor_olmalidir()"
>>>>>>> master
=======
  "name": "kullanici glbtrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US008StepDefinition.kullanici_glbtrader_sayfasina_gider()"
>>>>>>> master
<<<<<<< HEAD
});
formatter.result({
  "status": "passed"
>>>>>>> master
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user clicks min price link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_min_price_link()"
=======
  "name": "TC021 kullanici about us title ve header about us olarak görüldügünü verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc021_kullanici_about_us_title_ve_header_about_us_olarak_görüldügünü_verify_eder()"
=======
formatter.step({
  "name": "tc02 user writes false email and true password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc02_user_writes_false_email_and_true_password()"
>>>>>>> zehra
>>>>>>> master
=======
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user veryfies parcels are listed from min price to max price",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_parcels_are_listed_from_min_price_to_max_price()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc062",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
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
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
=======
<<<<<<< HEAD
  "name": "TC022 kullanici tel nosunun \"1-212-217-1900\" oldugunu verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc022_kullanici_tel_nosunun_oldugunu_verify_eder(java.lang.String)"
=======
  "name": "tc03 user writes true email and false password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc03_user_writes_true_email_and_false_password()"
>>>>>>> zehra
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user SelectLanguage box\u0027a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US014StepDefinitions.user_SelectLanguage_box_a_tiklar()"
=======
  "name": "user clicks max price link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_max_price_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veryfies parcels are listed from max price to min price",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_parcels_are_listed_from_max_price_to_min_price()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc063",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
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
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks left side M size",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_left_side_M_size()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veryfies at least one parcel are listed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_at_least_one_parcel_are_listed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.US013StepDefinitions.user_veryfies_at_least_one_parcel_are_listed(US013StepDefinitions.java:70)\r\n\tat ✽.user veryfies at least one parcel are listed(file:///C:/Users/SAM/IdeaProjects/GlbTrader/src/test/resources/features/US013.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc064",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
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
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks free shippping link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_free_shippping_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veryfies minimum nine parcels are listed",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_minimum_parcels_are_listed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc065",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US013"
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
  "name": "user clicks view more link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_view_more_link()"
>>>>>>> master
=======
  "name": "tc010 user password hatirlamiyor ise Forgot Password kutusuna tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_password_hatirlamiyor_ise_Forgot_Password_kutusuna_tiklasin()"
>>>>>>> master
=======
  "name": "searchboxa urun ismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US009StepDefinition.searchboxaUrunIsminiGirer()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user clicks home button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_home_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies home page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_verifies_home_page()"
=======
<<<<<<< HEAD
  "name": "TC023 kullanici metnin icerigini verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc023_kullanici_metnin_icerigini_verify_eder()"
=======
  "name": "tc04 user writes false email and false password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc04_user_writes_false_email_and_false_password()"
>>>>>>> zehra
>>>>>>> master
=======
  "name": "tc010 user Email kutusu oldugu ve veri gonderimi yapilabildigini assert etsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US002StepDefinition.tc010_user_Email_kutusu_oldugu_ve_veri_gonderimi_yapilabildigini_assert_etsin()"
>>>>>>> master
=======
  "name": "sonuclarda aranilan urun kontrol edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US009StepDefinition.sonuclardaAranilanUrunKontrolEdilir()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
>>>>>>> master
formatter.after({
  "status": "passed"
});
});