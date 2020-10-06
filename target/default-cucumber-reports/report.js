$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US006.feature");
formatter.feature({
  "name": "US006 test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US006"
    }
  ]
});
formatter.scenario({
  "name": "tc024",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US006"
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
  "name": "user asserts searchBox text",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_asserts_searchBox_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user asserts searchbutton color",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_asserts_searchbutton_text()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc025",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US006"
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
  "name": "user clicks search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_clicks_search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send Maniac Solid Mens Round data",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_send_Maniac_Solid_Mens_Round_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_clicks_search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user asserts in text box data can be sent",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_asserts_in_text_box_data_can_be_sent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc026",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US006"
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
  "name": "user send data to seachBox",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_send_data_to_seachBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_clicks_search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifiy the data with results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_verifiy_the_data_with_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "tc027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US006"
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
  "name": "user clicks Alle Categories Cellphones \u0026 Telecommunications",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_clicks_Alle_Categories_Cellphones_Telecommunications()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user finds ipad",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_finds_ipad()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...y) 12.9-inch Display[]\u003e but was:\u003c...y) 12.9-inch Display[sdafas]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.US006StepDefinitions.user_finds_ipad(US006StepDefinitions.java:63)\r\n\tat ✽.user finds ipad(file:///C:/Users/SAM/IdeaProjects/GlbTrader/src/test/resources/features/US006.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifiy the data with results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US006StepDefinitions.user_verifiy_the_data_with_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});