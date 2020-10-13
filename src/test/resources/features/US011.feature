@Cellphones

Feature: US011 Cellphones Test

  @TC051
  Scenario: tc051
    Given user GlobalTrader sayfasina gider
    Then  tc051 user Cellphones Telecommunications linkine tiklandiginda ilgili sayfaya ulassin

  @TC052
  Scenario: tc052
    Given user GlobalTrader sayfasina gider
    Given user Cellphones Telecommunications linkine tiklasin
    And   tc052 user CATEGORIES altinda Mobile Phones elementinin goruldugunu assert ediniz.
    And   tc052 user CATEGORIES altinda Phone Bags & Cases elementinin goruldugunu assert ediniz.
    And   tc052 user CATEGORIES altinda Mobile Phone Accessories elementinin goruldugunu assert ediniz.
    And   tc052 user CATEGORIES altinda Mobile Phone Parts elementinin goruldugunu assert ediniz.
    Then  tc052 user CATEGORIES altinda Power Bank elementinin goruldugunu assert ediniz.

  @TC053
  Scenario: tc053
    Given user GlobalTrader sayfasina gider
    And   user Cellphones Telecommunications linkine tiklasin
    And   tc053 user Mobile Phones yazisina tiklasin ve ilgili sayfadaki ilk urune ulassin
    And   tc053 user Phone Bags & Cases yazisina tiklasin ve ilgili sayfadaki ilk urune ulassin
    And   tc053 user Mobile Phone Accessories yazisina tiklasin ve sayfadaki ilk urune ulassin
    And   tc053 user Mobile Phone Parts yazisina tiklasin ve sayfadaki ilk urune ulassin
    Then  tc053 user Power Bank yazisina tiklasin ve sayfadaki ilk urune ulassin


