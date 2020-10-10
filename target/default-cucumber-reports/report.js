<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US005.feature");
formatter.feature({
  "name": "About us",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US001.feature");
formatter.feature({
  "name": "Sign In",
>>>>>>> zehra
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US005 kullanici about us sayfasinda islem yapar",
=======
  "name": "run Sign In test",
>>>>>>> zehra
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@us005"
=======
      "name": "@UserSignIn"
>>>>>>> zehra
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.step({
  "name": "tc02 user writes false email and true password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc02_user_writes_false_email_and_true_password()"
>>>>>>> zehra
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});