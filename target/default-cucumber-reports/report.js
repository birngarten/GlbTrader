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
  "name": "user writes true email and true password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.user_writes_true_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes false email and true password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.user_writes_false_email_and_true_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes true email and false password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.user_writes_true_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes false email and false password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US001StepDefinitions.user_writes_false_email_and_false_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});