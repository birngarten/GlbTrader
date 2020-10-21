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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});