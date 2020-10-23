@Jewelery&Accessories
Feature: Jewelery&Accessories button

  Scenario: TC044 Jewelery&Accessories sekmesi "Women Clothing&Accessories" sekmesinin
  altindadir ve acilabilir

    Given tc44 user global trader a gider
    And tc44 user 7 dropdown sekme oldugunu görür
    And tc44 user Jewelery&Accessories sekmesi "Women Clothing&Accessories" sekmesinin altinda oldugunu görür
    Then tc44 user Jewelery&Accessories sekmesini acar




  Scenario: TC045 Jewelery&Accessories sekmesi sütun sirasi ve baslik sayisi testi

    Given tc45 user ilk sutunda 3 baslik oldugunu görür
    And tc45 user orta sütunda 3 baslik oldugunu görür
    Then tc45 user son sütunda 2 baslik oldugunu görür




  Scenario: TC046 soldan saga sirasiyla basliklar testi

    Given tc46 Bu basliklari soldan saga sirasiyla görür
    Then tc46 Bu basliklarin ise soldan saga sirasiyla "Earrings", "Wedding&Engagement","Fine Jewelery", "Beads&Jewelery", "Necklaces & Pendants", "Rings", "Bracelets & Bangles", "Jewelery Sets & More" oldugunu dogrular



  Scenario: TC047 Jewelery&Accessories sekmesi altinda Earrings butonu testi

    Given tc47 user "Earrings" basligini görür
    And tc47 user "Earrings" basligi altinda sirasiyla "Earrings", "Gold", "Drop Earrings", Hoop Earrings" sekmelerinin oldugunu görür
    Then tc47 user üzerine gelinen sekmenin gri font rengine büründügünü görür




  Scenario: TC048 Earrings sekmesi altinda Gold butonu testi

    Given tc48 user "Gold" butonuna tiklar
    And tc48 user acilan sayfada, sol altta cikan filtrelme sekmelerini görür
    And tc48 user yukardan asagiya ücüncü sirada "Metals Type" sekmesinin bulundugunu görür
    Then tc48 user icindeki Boxlari isaretler






  Scenario: TC049 Jewelery Sets & More sekmesi testi

    Given tc49 user Jewelery&Accessories butonuna tiklar
    And tc49 user "Jewelery Sets & More"butonuna tiklar
    Then tc49 user resimli ürünlerden birinci sirada "Jewelery Sets" in oldugunu görür




  Scenario: TC050 Jewelery Sets & More sekmesi Prev ve Next butonlari testi

    Given tc50 user "Jewelery Sets & More" sekmesinde Prev ve Next butonlarini görür
    And tc50 user Prev butonuna tiklar ve kutucugun calistigini görür
    Then tc50 user Next butonuna tiklar ve kutucugun calistigini görür



