@Computer&Office

Feature: US012 GlbTrader Computer&Office

  Background: user glbTrader sayfasindadir
    Given  user glbTrader sayfasina gider
    And    user Computer-Office menusune tiklar
    And    user HomePage Tablets linkine tiklar
    And    user Tablets in altindaki iPad linkine tiklar
    And    user Apple iPad Pro ürünene tiklar


  @tc_054
  Scenario: TC054 Computer-Office menusu ana sayfadaki sol kisimdan ulasilabilir oldugunu dogrulayin
    Given  TC054 user Computer-Office menususu aktifmi?

  @tc_055
  Scenario: TC055 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro.. secenekleri sirasiyla tiklandiktan sonra ulasilan urunun kullanici girisi yapilmadan satin alinamadigini dogrulayin.
    Given TC055 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro.. secenekleri sirasiyla tiklandigini assert edin
    And   TC055 user Buy Now linkine tiklar
    And   TC055 user verileri girmeden Login ine tiklar
    Then  TC055 user ürünün alinabilirligini test eder

  @tc_056
  Scenario: TC056 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro.. secenekleri sirasiyla tiklandiktan sonra ulasilan urunun kullanici girisi yapilmadan wishliste eklenemedigini dogrulayin.
    Given TC056 user Add to wish liste tiklar
    Then  TC056 user alert olarak ilgili bilgiyi görür

  @tc_057
  Scenario: TC057 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro.. secenekleri sirasiyla tiklandiktan sonra ulasilan urune kullanici girisi yapilmadan feedback eklenemedigini dogrulayin.

    Given TC057 user Feedback box a tiklar
    And   TC057 user adini girer ve comment yazar
    And   TC057 user Leave a Rivew butonuna tiklar
    Then  TC057 user alert olarak ilgili bilgiyi görür

  @tc_058
  Scenario: TC058 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro..
  secenekleri sirasiyla tiklandiktan sonra ulasilan urune kullanici girisi yapilmadan
  Store info bolumundeki contact now linkine tiklayarak gerekli bilgileri girdikten
  sonra send butonuna tiklaninca "Your Data Send Successfully!!" mesajinin goruntulendigini dogrulayiniz


    Given TC058 Store info bolumundeki contact now linkine tiklar
    And   TC058 user Contact Us taki Inquiry Formu doldurur
    Then  TC058 user Send butonunu tiklar








