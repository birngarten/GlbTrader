@SelectLanguage

Feature: US014 GlbTrader SelectLanguage

  Background: user glbTrader sayfasindadir
    Given  user glbTrader sayfasina gider
    And    user SelectLanguage box'a tiklar


  @tc_066
  Scenario: TC066 Websitesinde "Dili Secin" Box ve asagi dogru ok isareti bulundugunu verify ediniz.
  Bu iki Elemente de tiklayinca asagida tüm dil seceneklerinin gorundugunu verify ediniz.
    Given  TC066 user menu box aktif mi
    And    TC066 user tiklayinca asagida tüm dil seceneklerinin gorundugunu verify ediniz.

  @tc_067
  Scenario: TC067 Dil secenek tablosunu sayfada bos bir yere tiklanarak kapatilabildigini verify ediniz.
    Given  TC067 Dil secenek tablosu sayfada bos bir yere tiklandiginda kapanir

  @tc_068
  Scenario: TC068 Cikan dil seceneklerine hover yapildiginda mavi oldugunu verify ediniz.
    Given  TC068 Secilen dil Hover yapildiginda mavi oldugunu verify ediniz.

  @tc_069
  Scenario: TC069 Dil secenegi "Almanca" ve "Ingilizce" tiklayinca acilan yeni sayfanin ilgili dilde acildigini
  verify ediniz.
    Given  TC069 Almanca tiklandiginda Almanca dilinde verify ediniz.
    And    TC069 Ingilizce tiklandiginda Ingilizce dilinde verify ediniz.

