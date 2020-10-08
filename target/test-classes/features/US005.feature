@us005
Feature: About us
  Scenario: US005 kullanici about us sayfasinda islem yapar
    Given kullanici "https://www.glbtrader.com/" sayfaya gider
    And TC020 kullanici about us sayfasi tiklandiginda acilabilir oldugunu verify eder
    And TC021 kullanici about us title ve header about us olarak görüldügünü verify eder
    And TC022 kullanici tel nosunun "1-212-217-1900" oldugunu verify eder
    Then TC023 kullanici metnin icerigini verify eder