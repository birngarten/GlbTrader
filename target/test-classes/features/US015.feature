@package
Feature: Package Sayfasi

  Background: User GlobalTradera gider
    Given Package Linkine tiklar

  @package070
  Scenario: TC070 Package sayfasinA ULASILABILIR OLMALIDIR
    Given TC070 user Package linkini test eder

  @package071
  Scenario: TC071 Title ve header "Join Now" olmalidir
    Given TC071 user Join Now textini check eder

  @package072
  Scenario: TC072 Join Now'un altindaki tablo check edilir
    Given   TC072 user Join now 'un altindaki tablonun varligi verfy edilir
    And     TC072 user basliklarin sirasiyla oldugunu test eder
    Then    TC072 user basliklarinin isimlerinin "Bronz (15 Items) - Silver (30 Items) - Gold (60 Items) - Platinium (120 Items)" oldugunu check eder

  @package073
  Scenario: TC073 soldan saga sirasiyla :"Valid Day - 30 - 90 - 180 - 365" oldugu verify edilir
    Given   TC073 user soldan saga sirasiyla : "Valid Day - 30 - 90 - 180 - 365" oldugunu check eder

  @package074
  Scenario: TC074 soldan saga sirasiyla : "Company Verified - ✔ - ✔ - ✔ - ✔ " oldugu verify edilir
    Given TC074 user soldan saga sirasiyla :"Company Verified - ✔ - ✔ - ✔ - ✔ " oldugunu check eder

  @package074
  Scenario: TC075 soldan saga sirasiyla : "Company Trust Seal - X - ✔ - ✔ - ✔ " oldugunu verify edilir
    Given   TC075 user soldan saga sirasiyla : "Company Trust Seal - X - ✔ - ✔ - ✔ " oldugu verify edilir
