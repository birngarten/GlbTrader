@US013
Feature: US013 test
  Scenario: tc059
    Given user clicks todays deal page
    Then user asserts there are four parcels in page

  Scenario: tc060
    Given user clicks todays deal page
    Then user clicks view more link
    And user veryfies the website

  Scenario: tc061
    Given user clicks todays deal page
    Then user clicks view more link
    Then user clicks min price link
    And user veryfies parcels are listed from min price to max price

  Scenario: tc062
    Given user clicks todays deal page
    Then user clicks view more link
    Then user clicks max price link
    And user veryfies parcels are listed from max price to min price

  Scenario: tc063
    Given user clicks todays deal page
    Then user clicks view more link
    Then user clicks left side M size
    Then user veryfies at least one parcel are listed

  Scenario: tc064
    Given user clicks todays deal page
    Then user clicks view more link
    Then user clicks free shippping link
    And user veryfies minimum 9 parcels are listed

  Scenario: tc065
    Given user clicks todays deal page
    Then user clicks view more link
    Then user clicks home button
    And user verifies home page
