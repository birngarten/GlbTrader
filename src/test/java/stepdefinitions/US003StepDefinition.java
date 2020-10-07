package stepdefinitions;

import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US003Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US003StepDefinition  {


    US003Page us003Page=new US003Page();
    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    Actions action=new Actions(Driver.getDriver());


    @Given("Seller Join now tiklar")
    public void seller_Join_now_tiklar() {

        Driver.getDriver().get("https://www.glbtrader.com/index.html");
        wait.until(ExpectedConditions.elementToBeClickable(us003Page.sellerJoinNow)).click();


    }

    @Given("tc11 user  Seller Join Now tiklasin")
    public void tc11_user_Seller_Join_Now_tiklasin() {

        Assert.assertTrue(us003Page.sellerJoinNow.isEnabled());

    }

    @Given("tc11 user Select Vendor Type da  Agent Seller tiklasin")
    public void tc11_user_Select_Vendor_Type_da_Agent_Seller_tiklasin() {

        ReusableMethods.waitFor(2);
        us003Page.agentSellerButton.click();
        Assert.assertTrue(us003Page.agentSellerButton.isEnabled());

    }

    @Then("tc11   user Agent Seller buttononu aktif oldugunu test etsin.")
    public void tc11_user_Agent_Seller_buttononu_aktif_oldugunu_test_etsin() {

        Assert.assertTrue(us003Page.agentSellerButton.isEnabled());

    }

    @Given("tc12 user name  Text box a {string} girsin")
    public void tc12_user_name_Text_box_a_girsin(String string) {

        us003Page.nameBox.sendKeys(string);

    }

    @Given("tc12 user email Text Box a {string} girsin")
    public void tc12_user_email_Text_Box_a_girsin(String string) {

        us003Page.emailBox.sendKeys(string);
    }

    @Given("tc12 user subDomain {string} url girsin")
    public void tc12_user_subDomain_url_girsin(String string) {

        us003Page.sub_domainBox.sendKeys(string);
    }

    @Given("tc12 user mobileNumberBoxa {string} girsin ve asert etsin")
    public void tc12_user_mobileNumberBoxa_girsin_ve_asert_etsin(String string) {
        us003Page.mobileBox.sendKeys(string);
        Assert.assertTrue(us003Page.mobileBox.isEnabled());

    }

    @Given("tc12 user country Box  olarak {string} secsin")
    public void tc12_user_country_Box_olarak_secsin(String string) {

        Select ulke=new Select(us003Page.categoriesSelectBox);
        ulke.selectByIndex(2);
    }

    @Given("tc12 user state Boxa {string} girsin")
    public void tc12_user_state_Boxa_girsin(String string) {

        us003Page.stateBox.sendKeys(string);
    }

    @Given("tc12 user city Boxa {string} girsin")
    public void tc12_user_city_Boxa_girsin(String string) {
        us003Page.cityBox.sendKeys(string);

    }

    @Given("tc12 user adress Box a {string} girsin")
    public void tc12_user_adress_Box_a_girsin(String string) {

        us003Page.adressBox.sendKeys(string);
    }

    @Given("tc12 user enter Postal Code Box a {string} girsin")
    public void tc12_user_enter_Postal_Code_Box_a_girsin(String string) {

        us003Page.zipCodePostal.sendKeys(string);
    }

    @Given("tc12 user categories bir alan secsin")
    public void tc12_user_categories_bir_alan_secsin() {

        ReusableMethods.waitFor(2);
        Select categori=new Select(us003Page.categoriesSelectBox);
        categori.selectByIndex(4);
    }

    @Given("tc12 user password Box a {string} sifre girsin")
    public void tc12_user_password_Box_a_sifre_girsin(String string) {

        action.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(2);
        us003Page.passwordBox.sendKeys(string);
    }

    @Then("tc12 user Regisration tiklasin ve assert etsin")
    public void tc12_user_Regisration_tiklasin_ve_assert_etsin() {

        action.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us003Page.registrationButton.isEnabled());
        action.click(us003Page.registrationButton).perform();
    }

    @Given("tc13 user Login Here butonuna tiklasin")
    public void tc13_user_Login_Here_butonuna_tiklasin() {

        action.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(1);
        us003Page.loginHereButton.click();
    }

    @Then("tc13 user sonraki  linkde Email ve Password textleri assert etsin")
    public void tc13_user_sonraki_linkde_Email_ve_Password_textleri_assert_etsin() {

        Assert.assertTrue(us003Page.loginEmailBox.isDisplayed());
        Assert.assertTrue(us003Page.loginPasswordBox.isDisplayed());
        Assert.assertTrue(us003Page.logInButton.isDisplayed());
        us003Page.loginEmailBox.sendKeys("aaa@bac.com");
        us003Page.loginPasswordBox.sendKeys("beton1234");
        us003Page.logInButton.click();

    }

    @Given("tc14 user  Select Vendor Type'da Company Seller Butonnu secsin")
    public void tc14_user_Select_Vendor_Type_da_Company_Seller_Butonnu_secsin() {

        Assert.assertTrue(us003Page.companySellerButton.isEnabled());

        us003Page.companySellerButton.click();

    }

    @Then("tc14 user Company Seller Butonunu secildigi assert edilsin")
    public void tc14_user_Company_Seller_Butonunu_secildigi_assert_edilsin() {

        us003Page.companySellerButton.click();
        String renk=ReusableMethods.getHexColor(us003Page.companySellerButton,"color");
        Assert.assertTrue(renk.contains("#333"));
        Assert.assertTrue(us003Page.companySellerButton.isEnabled());
    }

    @Given("tc15 user company Name {string} girsin")
    public void tc15_user_company_Name_girsin(String string) {
        us003Page.companyNameBox.sendKeys(string);

    }

    @Given("tc15 user company Mobile {string} girsin")
    public void tc15_user_company_Mobile_girsin(String string) {

        us003Page.companyMobileBox.sendKeys(string);
    }

    @Given("tc15 user company Adress {string} girsin")
    public void tc15_user_company_Adress_girsin(String string) {

        us003Page.companyAdress.sendKeys(string);
    }

    @Given("tc15 user name Box {string} girsin")
    public void tc15_user_name_Box_girsin(String string) {

        us003Page.comNameBox.sendKeys(string);
    }

    @Given("tc15 user emailText Box {string} girsin")
    public void tc15_user_emailText_Box_girsin(String string) {

        us003Page.comEmailBox.sendKeys(string);
    }

    @Given("tc15 user subDomain {string} girsin")
    public void tc15_user_subDomain_girsin(String string) {

        us003Page.com_SubDomainBox.sendKeys(string);
    }

    @Given("tc15 user mobil Number {string} girsin")
    public void tc15_user_mobil_Number_girsin(String string) {

        us003Page.com_Vendor_MobileBox.sendKeys(string);
    }

    @Given("tc15 user country secsin")
    public void tc15_user_country_secsin() {

        action.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(2);
        Select ulke=new Select(us003Page.com_Country_Select);
        ulke.selectByIndex(2);

    }

    @Given("tc15 user state Box {string} girsin")
    public void tc15_user_state_Box_girsin(String string) {

        us003Page.com_State_Box.sendKeys(string);
    }

    @Given("tc15 user city Box a {string} girsin")
    public void tc15_user_city_Box_a_girsin(String string) {

        us003Page.com_City_Box.sendKeys(string);
    }

    @Given("tc15 user addres Box {string} girsin")
    public void tc15_user_addres_Box_girsin(String string) {

        us003Page.com_addres_box.sendKeys(string);
    }

    @Given("tc15 user postal Code Box a {string} girsin")
    public void tc15_user_postal_Code_Box_a_girsin(String string) {
        action.sendKeys(Keys.PAGE_DOWN).perform();

        us003Page.com_Postal_code_box.sendKeys(string);

    }

    @Given("tc15 user categories den bir secim yapsin")
    public void tc15_user_categories_den_bir_secim_yapsin() {

        action.sendKeys(Keys.PAGE_DOWN).build().perform();
        ReusableMethods.waitFor(2);
        Select categori=new Select(us003Page.categoriesSelectBox);
        categori.selectByIndex(3);


    }

    @Given("tc15 user password Box a {string} girsin")
    public void tc15_user_password_Box_a_girsin(String string) {
        action.sendKeys(Keys.PAGE_DOWN).perform();

        us003Page.com_Password_Box.sendKeys(string);

    }

    @Then("tc15 registration tiklasin ve Succesfully ifadesini gorsun")
    public void tc15_registration_tiklasin_ve_Succesfully_ifadesini_gorsun() {
        action.sendKeys(Keys.PAGE_DOWN).build().perform();
        ReusableMethods.waitFor(2);
        us003Page.com_Regisration_Button.click();
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us003Page.succesfullyText.getText().contains("Successfully"));

    }







}
