@UserJoinNow

Feature: US002 User Join Now

  @TC005
  Scenario: tc005  gecerli Sign in test
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc005 user Sign Up yazisini assert etsin
    And   tc005 user Email kutusuna gecerli text girsin
    And   tc005 user Name kutusuna gecerli text girsin
    And   tc005 user Mobile kutusuna gecerli text girsin
    And   tc005 user Password kutusuna gecerli text girsin
    And   tc005 user Confirm Password kutusuna gecerli text girsin
    Then  tc005 user Sign Up butonuna tiklayabilmelidir

  @TC006
  Scenario Outline: tc006 Gecersiz Email Testi
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc006 user Email "<WrongEmail>" girer

    Examples: Wrong Email Test
      |WrongEmail           |
      |glbtradermail.com    |
      |@mail.com            |
      |glbtrader@.com       |
      |glbtrader@mail.      |

  @TC007
  Scenario Outline: tc007 Gecersiz Name Testi
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc005 user Email kutusuna gecerli text girsin
    Then  tc007 user Name "<WrongName>" girer

    Examples: Wrong Email Test
      |WrongName    |
      |ABC1 C3      |
      |3ABC 3L      |
      |abc5 b5      |
      |8abc 9a      |

  @TC008
  Scenario Outline: tc008 Gecersiz Mobile Testi
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc005 user Email kutusuna gecerli text girsin
    And   tc005 user Name kutusuna gecerli text girsin
    Then  tc008 user Mobile "<WrongMobile>" girer

    Examples: Wrong Mobile Test
      |WrongMobile    |
      |0533A4562      |
      |A05335623      |
      |05334961a      |
      |a05334466      |

  @TC009
  Scenario Outline: tc009 Gecersiz Password Testi
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc005 user Email kutusuna gecerli text girsin
    And   tc005 user Name kutusuna gecerli text girsin
    And   tc005 user Mobile kutusuna gecerli text girsin
    Then  tc009 user Password "<WrongPassword>" girer

    Examples: Wrong Password Test
      |WrongPassword  |
      |Abc1           |
      |aS1            |
      |5s             |
      |6              |

  @TC010
  Scenario: tc010 Login
    Given user GlobalTrader sayfasina gider
    And   user Join now tiklar
    And   tc010 user Login Here yazisina tiklasin
    And   tc010 user yeni acilan sayfada Email ve Password text box'lari goruluyor olmalidir
    And   tc010 user password hatirlamiyor ise Forgot Password kutusuna tiklasin
    Then  tc010 user Email kutusu oldugu ve veri gonderimi yapilabildigini assert etsin

