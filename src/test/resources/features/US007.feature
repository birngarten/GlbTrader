@us007
  Feature: All Categories Computer & Office Menu Linkinde Test Yapma
    Scenario: US007 kullanici computer & office menu linkinde urun aramasi yapar
    Given kullanici "https://www.glbtrader.com/" sayfaya gider
    And tc029 kullanici all categories de dropbox secenek sayisini bulur
    And tc030 kullanici besinci sirada computer&office secer ve bir urun ismi girip sonuc alir
    And tc031 kullanici computer&office aranan urunun  sayfasinda  GLOBAL TRADER  logosu gorur
    And tc032 kullanici urunu All Categories,Computer and Office,Electronic Components & Supplies arar ve karsilastirir
    Then tc033 kullanici ranan urunun  fiyati, resmi ve titlesinin gorunup gorunmedini verify edr
