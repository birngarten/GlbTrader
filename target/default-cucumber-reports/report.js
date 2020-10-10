$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US001.feature");
formatter.feature({
  "name": "Sign In",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UserSignIn"
    }
  ]
});
formatter.scenario({
  "name": "run Sign In test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserSignIn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "tc01 user writes true email and true password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc01_user_writes_true_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc02 user writes false email and true password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc02_user_writes_false_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc03 user writes true email and false password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc03_user_writes_true_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tc04 user writes false email and false password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.tc04_user_writes_false_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});