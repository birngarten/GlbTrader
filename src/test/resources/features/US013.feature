@US013
Feature: US013 test
  Scenario: tc059 Today`sDeal frame inde her zaman 4 urun bulunmali
    Then user asserts there are four parcels in page

  Scenario: tc060 "view more" butonuna tiklandiginda "https://www.glbtrader.com/deal.html" adresine yönlendirmeli
    Then user clicks view more link
    And user veryfies the website

  Scenario: tc061 "Min. Price" fiyatlari indirimsiz haline göre kücükten büyüge siralamali
    Then user clicks view more link
    Then user clicks min price link
    And user veryfies parcels are listed from min price to max price

  Scenario: tc062 "Max. Price" fiyatlari indirimsiz haline göre büyükten kücüge siralamali
    Then user clicks view more link
    Then user clicks max price link
    And user veryfies parcels are listed from max price to min price

  Scenario: tc063 m beden de en az bir adet ürün bulunmali
    Then user clicks view more link
    Then user clicks left side M size
    Then user veryfies at least one parcel are listed

  Scenario: tc064 Free Shipping menusunde 9 adet urun bulunmali
    Then user clicks view more link
    Then user clicks free shippping link
    And user veryfies minimum nine parcels are listed

  Scenario: tc065 home menu linki ile ana sayfaya dönülebilmeli
    Then user clicks view more link
    Then user clicks home button
    And user verifies home page
