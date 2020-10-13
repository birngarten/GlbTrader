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
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@US013"
=======
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
>>>>>>> master
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
  "name": "tc059",
=======
<<<<<<< HEAD
  "name": "US005 kullanici about us sayfasinda islem yapar",
=======
  "name": "run Sign In test",
>>>>>>> zehra
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
=======
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
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
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
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
});
formatter.result({
  "status": "passed"
});
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
=======
<<<<<<< HEAD
formatter.step({
  "name": "TC020 kullanici about us sayfasi tiklandiginda acilabilir oldugunu verify eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc020_kullanici_about_us_sayfasi_tiklandiginda_acilabilir_oldugunu_verify_eder()"
=======
  "name": "kullanici glbtrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US008StepDefinition.kullanici_glbtrader_sayfasina_gider()"
>>>>>>> master
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
formatter.after({
  "status": "passed"
});
});