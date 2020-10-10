@UserSignIn


Feature: Sign In
  Scenario: run positive test
    Given user on sign in
    And user writes true email
    And user writes true password
    Then user clicks login


  Scenario: run negative test(with true only email)
    Given user on sign in
    And user writes true email
    And user writes false password
    Then user clicks login

  Scenario: run negative test(with true only password)
    Given user on sign in
    And user writes false email
    And user writes true password
    Then user clicks login

  Scenario: run negative test(with wrong email and pass.)
    Given user on sign in
    And user writes false email
    And user writes false password
    Then user clicks login