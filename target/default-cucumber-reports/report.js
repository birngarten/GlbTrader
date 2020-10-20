<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US005.feature");
formatter.feature({
  "name": "About us",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US015.feature");
formatter.feature({
  "name": "Package Sayfasi",
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
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
=======
      "name": "@package"
    }
  ]
});
formatter.background({
  "name": "User GlobalTradera gider",
  "description": "",
  "keyword": "Background"
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
});
formatter.before({
  "status": "passed"
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
  "name": "Package Linkine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US015StepDefinition.package_Linkine_tiklar()"
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
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
=======
formatter.scenario({
  "name": "TC074 soldan saga sirasiyla : \"Company Verified - ✔ - ✔ - ✔ - ✔ \" oldugu verify edilir",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@package"
    },
    {
      "name": "@package074"
    }
  ]
});
formatter.step({
  "name": "TC074 user soldan saga sirasiyla :\"Company Verified - ✔ - ✔ - ✔ - ✔ \" oldugunu check eder",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US015StepDefinition.tc074_user_soldan_saga_sirasiyla_oldugunu_check_eder(java.lang.String)"
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User GlobalTradera gider",
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
  "name": "Package Linkine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US015StepDefinition.package_Linkine_tiklar()"
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "TC023 kullanici metnin icerigini verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US005StepDefinition.tc023_kullanici_metnin_icerigini_verify_eder()"
=======
formatter.scenario({
  "name": "TC075 soldan saga sirasiyla : \"Company Trust Seal - X - ✔ - ✔ - ✔ \" oldugunu verify edilir",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@package"
    },
    {
      "name": "@package074"
    }
  ]
});
formatter.step({
  "name": "TC075 user soldan saga sirasiyla : \"Company Trust Seal - X - ✔ - ✔ - ✔ \" oldugu verify edilir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US015StepDefinition.tc075_user_soldan_saga_sirasiyla_oldugu_verify_edilir(java.lang.String)"
>>>>>>> 026547eac9a2f32ea064ac3ee3ee45c208bbc9d3
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});