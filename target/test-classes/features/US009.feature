Feature: Women clothing

  @tc039 @us009
  Scenario: TC039 Sol bloktan Woman Clothing/Tassels Dresses menusündeki
  ilk ürünün "Meaneor Women Chiffon 13 Solid colors Summer Pretty Vestidos
  Famale elegant Pleated Dress Sleeveless Vest mini Dress With Belt" olduğunu assert edin

    Given kullanici glbtrader sayfasina gider
    And women clothing menusune tiklar
    And Tassels Dresses menusune tiklar
    And ilk urune menusune tiklar
    Then urunun isminin istenilen sekilde oldugunu assert eder

    @tc040 @us009
  Scenario: TC040 Aynı ürünün renk seçeneklerinin
  sırasıyla gray, red, pink, green, black, orange,
  white  olduğunu ve bu renklerin seçilebildiğini assert edin.

    Given kullanici glbtrader sayfasina gider
    And women clothing menusune tiklar
    And Tassels Dresses menusune tiklar
    And ilk urune menusune tiklar
    Then renkleri ve erisilebilir olduklarini assert eder

  @tc041 @us009
  Scenario: TC041 Aynı ürünün beden seçeneklerinin sırasıyla
  S, M, L, XL, XXL olduğunu ve bu renklerin seçilebildiğini assert edin.

    Given kullanici glbtrader sayfasina gider
    And women clothing menusune tiklar
    And Tassels Dresses menusune tiklar
    And ilk urune menusune tiklar
    Then bedenleri assert eder

  @tc042 @us009
  Scenario: TC042 Ürünün tüm renklerde S beden 12$,
  diğer bedenlerinin 14$ olduğunu assert edin

    Given kullanici glbtrader sayfasina gider
    And women clothing menusune tiklar
    And Tassels Dresses menusune tiklar
    And ilk urune menusune tiklar
    Then fiyatlari assert eder

  @tc043 @us009
  Scenario: TC043 Bu ürünün anasayfa search box ile
  aranıp bulunabildiğini assert edin.

    Given kullanici glbtrader sayfasina gider
    And searchboxa urun ismini girer
    Then sonuclarda aranilan urun kontrol edilir