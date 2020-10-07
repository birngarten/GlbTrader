@SellerSignIn
Feature: Seller Sign in testi

  Background: User GlobalTrader gider
    Given     user Seller Sign in a  tiklar

  @SellerSign1
  Scenario: TC016 seller Login butonu https://www.glbtrader.com/vendor_login.html sayfasina yönlendirmelidir.
    Given tc16 user "https://www.glbtrader.com/vendor_login.html" sayfasina gitsin

  @SellerSign2
  Scenario Outline: TC017 sing In icin  negatif testler yapilsin
    Given tc17 user enter your email icin negatif  gecersiz "<wrong email>" girsin
    Then  tc17 user enter Password icin  negatif gecersiz "<wrong password>" girsin

    Examples: Hatali veriler listesi
      | wrong email | wrong password |
      | a@g.        | ...1           |
      | 1@.         | abc            |
      | @.com       | can22          |

  @SellerSign3
  Scenario Outline:  TC017 sing In icin  pozitif testler yapilsin
    Given tc17 user enter your email  icin pozitif  GECERLI "<email>" girsin
    Then  tc17 user enter Password icin pozitif  gecerli "<password>" girsin

    Examples: Dogru veriler listesi
      | email         | password |
      | a@gmail.com   | aba234.  |
      | aba1@a.com    | 12345A.  |
      | net@gmail.com | bet2017! |

    @SellerSign4
    Scenario: TC018 Forgot Password menu linki https://www.glbtrader.com/vendor_forgot.html sayfasina yonlendirmelidir.
      Given tc18 user forgot Password linkine tiklasin
      Then  tc18 user linkini "https://www.glbtrader.com/vendor_forgot.html" assert etsin


      @SellerSign5
      Scenario: TC019 Sayfadaki text kutucuguna email yazilabilmeli ve Forgot Passwort butonuna tiklandiginda sayfa yenilenmelidir.
        Given tc19 user enter your email kusutunsa "email" yazsin
        And   tc19 user enter your email kutusuna veri girdikten sonra Forgot Password tiklasin
        Then  tc19 user fortgot password tiklandikdan sonra sayfanin yenilendigi test edilsin






