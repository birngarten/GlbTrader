$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US007.feature");
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
  "name": "tc032 kullanici test case de belirlenen sartlara gore urun aramasi yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc032_kullanici_test_case_de_belirlenen_sartlara_gore_urun_aramasi_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc033 kullanici aranan urunun sonuclarini test case de belirtilen sekilde kiyaslayarak test yapar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US007StepDefinition.tc033_kullanici_aranan_urunun_sonuclarini_test_case_de_belirtilen_sekilde_kiyaslayarak_test_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});