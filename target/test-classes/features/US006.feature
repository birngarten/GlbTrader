@US006
  Feature: US006 test

    Scenario: tc024
      Given user asserts searchBox text
      Then user asserts searchbutton color

    Scenario: tc025
      Then user clicks search Button
      Given user send Maniac Solid Mens Round data
      Then user clicks search Button
      Given user asserts in text box data can be sent

    Scenario: tc026
      Given user send data to seachBox
      Then user clicks search Button
      Then user verifiy the data with results

    Scenario: tc027
      Given user clicks Alle Categories Cellphones & Telecommunications
      And user finds ipad
      Then user verifiy the data with results


