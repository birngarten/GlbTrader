@UserSignIn


Feature: Sign In
  Scenario: run Sign In test

    Given tc01 user writes true email and true password
    And tc02 user writes false email and true password
    And tc03 user writes true email and false password
    Then tc04 user writes false email and false password


