@US006
  Feature: US006 test

    Scenario: tc024 "I'm Shopping for"ifadesi gorunur olsun ve arama Butono Kirmizi olsun .
      Given user asserts searchBox text
      Then user asserts searchbutton color

    Scenario: tc025 "I'm Shopping for" Text Box una  " Maniac Solid Mens Round Neck T-Shirtsdafas " girilebilir olsun
      Then user clicks search Button
      Given user send Maniac Solid Mens Round data
      Then user clicks search Button
      Given user asserts in text box data can be sent

    Scenario: tc026 Arama alanina  "Ipad"ifadesi girilip  sonraki cikan sonucu verifiye ediniz
      Given user send data to seachBox
      Then user clicks search Button
      Then user verifiy the data with results

    Scenario: tc027 Arama alanina "Ipad" ifadesi girilip ve  Alle Categories " Cellphones & Telecommunications "  secilip  cikan sonucu verify ediniz , Ipad olup olmadinigi.
      Given user clicks Alle Categories Cellphones & Telecommunications
      And user finds ipad
      Then user verifiy the data with results


