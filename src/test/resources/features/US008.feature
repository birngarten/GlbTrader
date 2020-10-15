
Feature: Men Clothing & Accessories

  @US008 @tc034
  Scenario: TC034 Men Clothing & Accessories'in All Categories dropdown'unun altinda oldugunu
  verify ediniz!
    Given kullanici glbtrader sayfasina gider
    And all categories dropboxuna tiklar
    Then Men Clothing & Accessories var mi verify eder

  @US008 @tc035
  Scenario: TC035 CATEGORIES See All >>  basliginin altinda bulunan Men Clothing & Accessories "Jeans" basligi
  altindaki urun sayisinin 2 oldugunu dogrulayiniz.
    Given kullanici glbtrader sayfasina gider
    And CATEGORIES See All linkine tiklar
    And Jeans linkine tiklar
    Then urun sayisini assert eder


  @tc036 @US008
  Scenario: TC036 CATEGORIES See All >> linkine tiklandiktan sonra acilan sayfadaki Men Clothing & Accessories
  linkine tiklayiniz! Acilan sayfada kac link basligi oldugunu test ediniz! 7. linke tikladiktan sonra
  ilk urunun "font-size"nin  14px oldugunu assert ediniz

    Given kullanici glbtrader sayfasina gider
    And CATEGORIES See All linkine tiklar
    And Men Clothing & Accessories linkine tiklar
    Then icerideki urun sayisini assert eder
    And linke tiklar
    Then ilk urunun font sizeni assert eder

  @tc037 @US008
  Scenario:TC037 CATEGORIES See All >> linkine tiklandiktan sonra acilan sayfadaki Men Clothing & Accessories
  linkine tiklayiniz! JACKETS&COATS linkine tikladiktan sonra Blazers urunune tiklayiniz!
  Price Filter, Brand, Size "L", Clothing Lenght "Regular", Collar "Hooded", Sleeve Length(cm) "Full",
  checkBox'larinin secilebilirligini test ediniz!

    Given kullanici glbtrader sayfasina gider
    And CATEGORIES See All linkine tiklar
    And Men Clothing & Accessories linkine tiklar
    And Jackets&Coats menusune tiklar
    And blazer linkine tiklar
    Then gerekli kisimlari assert eder

  @tc038 @US008
  Scenario:TC038 CATEGORIES See All >>  basliginin altinda bulunan Men Clothing & Accessories "Shoes" basligi
  altindaki Boots urunlerinden "9,5" numara secilebildigini assert ediniz.

    Given kullanici glbtrader sayfasina gider
    And CATEGORIES See All linkine tiklar
    And Men Clothing & Accessories linkine tiklar
    And shoes menusune tiklar
    And boots linkine tiklar
    Then numaranin secilebildigi assert edilir


