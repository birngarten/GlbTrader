package stepdefinitions;

import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US004Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US004StepDefinition {

    US004Page us004Page=new US004Page();

    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    Actions action=new Actions(Driver.getDriver());

    @Given("user Seller Sign in a  tiklar")
    public void user_Seller_Sign_in_a_tiklar() {

        Driver.getDriver().get("https://www.glbtrader.com/index.html");
        wait.until(ExpectedConditions.elementToBeClickable(us004Page.selleSignButton)).click();
        ReusableMethods.waitFor(2);

    }

    @Given("tc16 user {string} sayfasina gitsin")
    public void tc16_user_sayfasina_gitsin(String string) {
        Assert.assertTrue(us004Page.avatarPicture.isDisplayed());
    }

    @Given("tc17 user enter your email icin negatif  gecersiz {string} girsin")
    public void tc17_user_enter_your_email_icin_negatif_gecersiz_girsin(String string) {

        for (int i=0; i<4; i++){

            us004Page.userEmailBox.sendKeys(string);
            us004Page.userPasswordBox.sendKeys("betul2017.");
            us004Page.loginButon.click();
        }



    }

    @Then("tc17 user enter Password icin  negatif gecersiz {string} girsin")
    public void tc17_user_enter_Password_icin_negatif_gecersiz_girsin(String string) {

        for (int i=0; i<4; i++){
            us004Page.userEmailBox.sendKeys("abc@gmail.com");
            us004Page.userPasswordBox.sendKeys(string);
            us004Page.loginButon.click();
        }

    }

    @Given("tc17 user enter your email  icin pozitif  GECERLI {string} girsin")
    public void tc17_user_enter_your_email_icin_pozitif_GECERLI_girsin(String string) {
        us004Page.userEmailBox.sendKeys(string);
        us004Page.userPasswordBox.sendKeys("baN1234.");
        us004Page.loginButon.click();

    }

    @Then("tc17 user enter Password icin pozitif  gecerli {string} girsin")
    public void tc17_user_enter_Password_icin_pozitif_gecerli_girsin(String string) {
        us004Page.userEmailBox.sendKeys("aba@cmail.com");
        us004Page.userPasswordBox.sendKeys(string);
        us004Page.loginButon.click();

    }

    @Given("tc18 user forgot Password linkine tiklasin")
    public void tc18_user_forgot_Password_linkine_tiklasin() {

        Assert.assertTrue(us004Page.forgotPassLink.isEnabled());
        JavascriptExecutor jsExecutor= ((JavascriptExecutor)Driver.getDriver());// casting yaptik  Drivere musade etmek icin
        jsExecutor.executeScript("arguments[0].click();",us004Page.forgotPassLink);// click yontemi icin 0 secmek ger
        ReusableMethods.waitFor(2);

    }

    @Then("tc18 user linkini {string} assert etsin")
    public void tc18_user_linkini_assert_etsin(String string) {
        Driver.getDriver().get("https://www.glbtrader.com/vendor_login.html");

        JavascriptExecutor jsExecutor= ((JavascriptExecutor)Driver.getDriver());// casting yaptik  Drivere musade etmek icin
        jsExecutor.executeScript("arguments[0].click();",us004Page.forgotPassLink);// click yontemi icin 0 secmek ger
//        ReusableMethods.waitFor(2);
//        Assert.assertTrue(us004Page.forgotPassLink.getText().contains(us004Page.vendorForgotFormText.getText()));



    }

    @Given("tc19 user enter your email kusutunsa {string} yazsin")
    public void tc19_user_enter_your_email_kusutunsa_yazsin(String string) {

        Driver.getDriver().get("https://www.glbtrader.com/vendor_login.html");

        JavascriptExecutor jsExecutor= ((JavascriptExecutor)Driver.getDriver());// casting yaptik  Drivere musade etmek icin
        jsExecutor.executeScript("arguments[0].click();",us004Page.forgotPassLink);// click yontemi icin 0 secmek ger
        ReusableMethods.waitFor(2);
        us004Page.forgot_email_Box.sendKeys(string);
        us004Page.forgotPasswordSubmit.click();
    }

    @Given("tc19 user enter your email kutusuna veri girdikten sonra Forgot Password tiklasin")
    public void tc19_user_enter_your_email_kutusuna_veri_girdikten_sonra_Forgot_Password_tiklasin() {
        Driver.getDriver().get("https://www.glbtrader.com/vendor_login.html");

        JavascriptExecutor jsExecutor= ((JavascriptExecutor)Driver.getDriver());// casting yaptik  Drivere musade etmek icin
        jsExecutor.executeScript("arguments[0].click();",us004Page.forgotPassLink);// click yontemi icin 0 secmek ger
        ReusableMethods.waitFor(2);
        us004Page.forgot_email_Box.sendKeys("aba@gmail.com");
        us004Page.forgotPasswordSubmit.click();
        Assert.assertTrue(us004Page.forgotPasswordSubmit.isEnabled());


    }

    @Then("tc19 user fortgot password tiklandikdan sonra sayfanin yenilendigi test edilsin")
    public void tc19_user_fortgot_password_tiklandikdan_sonra_sayfanin_yenilendigi_test_edilsin() {
        Driver.getDriver().get("https://www.glbtrader.com/vendor_login.html");

        JavascriptExecutor jsExecutor= ((JavascriptExecutor)Driver.getDriver());// casting yaptik  Drivere musade etmek icin
        jsExecutor.executeScript("arguments[0].click();",us004Page.forgotPassLink);// click yontemi icin 0 secmek ger
        ReusableMethods.waitFor(2);
        us004Page.forgot_email_Box.sendKeys("aba@gmail.com");
        us004Page.forgotPasswordSubmit.click();
        Assert.assertTrue(us004Page.forgotPasswordSubmit.isEnabled());
        Assert.assertEquals(us004Page.forgot_email_Box.getText(),"");

    }

}
