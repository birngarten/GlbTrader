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
  "name": "run positive test",
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
  "name": "user on sign in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes true email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes true password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "run negative test(with true only email)",
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
  "name": "user on sign in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes true email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes false password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "run negative test(with true only password)",
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
  "name": "user on sign in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes false email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes true password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "run negative test(with wrong email and pass.)",
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
  "name": "user on sign in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes false email",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes false password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});