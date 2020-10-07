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