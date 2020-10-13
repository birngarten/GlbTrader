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
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici glbtrader sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US008StepDefinition.kullanici_glbtrader_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "searchboxa urun ismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US009StepDefinition.searchboxaUrunIsminiGirer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sonuclarda aranilan urun kontrol edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US009StepDefinition.sonuclardaAranilanUrunKontrolEdilir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});