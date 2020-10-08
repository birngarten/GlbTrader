$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US005.feature");
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
});