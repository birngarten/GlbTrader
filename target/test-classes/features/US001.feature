@UserSignIn


Feature: Sign In
  Scenario: run Sign In test

    Given user writes true email and true password
    And user writes false email and true password
    And user writes true email and false password
    Then user writes false email and false password


