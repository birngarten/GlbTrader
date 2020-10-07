<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US013.feature");
formatter.feature({
  "name": "US013 test",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US004.feature");
formatter.feature({
  "name": "Seller Sign in testi",
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@US013"
    }
  ]
});
formatter.scenario({
  "name": "tc059",
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
  "name": "user asserts there are four parcels in page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_asserts_there_are_parcels_in_page()"
});
formatter.result({
  "status": "passed"
});
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user veryfies the website",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_veryfies_the_website()"
});
formatter.result({
  "status": "passed"
});
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
  "name": "user clicks min price link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_min_price_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
=======
      "name": "@SellerSignIn"
    }
  ]
});
formatter.background({
  "name": "User GlobalTrader gider",
  "description": "",
  "keyword": "Background"
>>>>>>> master
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
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
  "name": "user clicks max price link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US013StepDefinitions.user_clicks_max_price_link()"
=======
  "name": "user Seller Sign in a  tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.user_Seller_Sign_in_a_tiklar()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.scenario({
  "name": "TC019 Sayfadaki text kutucuguna email yazilabilmeli ve Forgot Passwort butonuna tiklandiginda sayfa yenilenmelidir.",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
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
  "status": "passed"
});
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
=======
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
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
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
=======
  "name": "tc19 user enter your email kutusuna veri girdikten sonra Forgot Password tiklasin",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc19_user_enter_your_email_kutusuna_veri_girdikten_sonra_Forgot_Password_tiklasin()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "tc19 user fortgot password tiklandikdan sonra sayfanin yenilendigi test edilsin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US004StepDefinition.tc19_user_fortgot_password_tiklandikdan_sonra_sayfanin_yenilendigi_test_edilsin()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});