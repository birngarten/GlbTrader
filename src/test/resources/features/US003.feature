@SellerJoinNow

Feature: Seller Join Now

  Background: User GlobalTrader gider
    Given Seller Join now tiklar

  @agentSellerFormu1
  Scenario: TC011	Select Vendor Type'da "Agent Seller" secilebilir olmalidir.
    Given tc11 user  Seller Join Now tiklasin
    And   tc11 user Select Vendor Type da  Agent Seller tiklasin
    Then  tc11   user Agent Seller buttononu aktif oldugunu test etsin.

  @agentSellerFormu2
  Scenario: TC012 Agent seller altinda ki form doldurulsun ve assert edilsin
    Given tc12 user name  Text box a "can" girsin
    And   tc12 user email Text Box a "ae@gmail.com" girsin
    And   tc12 user subDomain "www.abc.com" url girsin
    And   tc12 user mobileNumberBoxa "01605553480" girsin ve asert etsin
    And   tc12 user country Box  olarak "Turkey" secsin
    And   tc12 user state Boxa "usa" girsin
    And   tc12 user city Boxa "Florida" girsin
    And   tc12 user adress Box a "weidigweg 31,65647" girsin
    And   tc12 user enter Postal Code Box a "64293" girsin
    And   tc12 user categories bir alan secsin
    And   tc12 user password Box a "1235676" sifre girsin
    Then  tc12 user Regisration tiklasin ve assert etsin

  @agentSellerFormu3
    Scenario: TC013 Login Here butonuna tiklandiktan sonra acilan sekmede Email ve Password text box'lari goruluyor olmalidir.
    Given tc13 user Login Here butonuna tiklasin
    Then  tc13 user sonraki  linkde Email ve Password textleri assert etsin

  @companySellerFormu1
  Scenario: TC 014 Select Vendor Type'da "Company Seller" secilebilir olmalidir.
    Given  tc14 user  Select Vendor Type'da Company Seller Butonnu secsin
    Then   tc14 user Company Seller Butonunu secildigi assert edilsin


  @companySellerFormu2
  Scenario: TC015 Company Seller sayfasinin  text Boxlari doldurulsun ve assert edilsin
    Given tc15 user company Name " siroet" girsin
    And   tc15 user company Mobile "+48" girsin
    And   tc15 user company Adress "weidugweg 34" girsin
    And   tc15 user name Box "isim" girsin
    And   tc15 user emailText Box "stgjss@ggg.com" girsin
    And   tc15 user subDomain "www.gogle.com" girsin
    And   tc15 user mobil Number "05333638221" girsin
    And   tc15 user country secsin
    And   tc15 user state Box "usa" girsin
    And   tc15 user city Box a "Florida" girsin
    And   tc15 user addres Box "buraya adresgir" girsin
    And   tc15 user postal Code Box a "64291" girsin
    And   tc15 user categories den bir secim yapsin
    And   tc15 user password Box a "123467" girsin
    Then  tc15 registration tiklasin ve Succesfully ifadesini gorsun










