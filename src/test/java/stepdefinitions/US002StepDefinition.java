package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US002Page;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;

import java.util.concurrent.ThreadLocalRandom;

public class US002StepDefinition {

    public static String randomStringData(int a){
        String myData ="";
        for (int i=0;i<a;i++) {
            char ascii = (char) ThreadLocalRandom.current().nextInt(97, 122 );
            myData =myData + ascii;
        }
        return myData;
    }
    public static long randomLongData (int a, int b){
        long randomNum = a + (long)(Math.random() * b);
        return randomNum;
    }

    US002Page us002Page=new US002Page();
    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    Actions actions=new Actions(Driver.getDriver());

    @Given("user GlobalTrader sayfasina gider")
    public void user_GlobalTrader_sayfasina_gider() {
        Driver.getDriver().get("https://www.glbtrader.com/");
    }

    @Given("user Join now tiklar")
    public void user_Join_now_tiklar() {
        us002Page.joinNow.click();
    }

    @Given("tc005 user Sign Up yazisini assert etsin")
    public void tc005_user_Sign_Up_yazisini_assert_etsin() {
        Assert.assertTrue(us002Page.headerSignIn.isDisplayed());
    }

    @Given("tc005 user Email kutusuna gecerli text girsin")
    public void tc005_user_Email_kutusuna_gecerli_text_girsin() {
        us002Page.emailText.sendKeys(randomStringData(6)+"21"+"@mail.com");
        //us002Page.emailText.sendKeys(ConfigurationReader.getProperty("valid_email"));
    }

    @Given("tc005 user Name kutusuna gecerli text girsin")
    public void tc005_user_Name_kutusuna_gecerli_text_girsin() {
        us002Page.nameText.sendKeys(randomStringData(5)+" "+randomStringData(5));
        //us002Page.nameText.sendKeys(ConfigurationReader.getProperty("valid_name"));
    }

    @Given("tc005 user Mobile kutusuna gecerli text girsin")
    public void tc005_user_Mobile_kutusuna_gecerli_text_girsin() {
        us002Page.mobileText.sendKeys(ConfigurationReader.getProperty("valid_mobile")+randomLongData(1,9));
        //us002Page.mobileText.sendKeys(ConfigurationReader.getProperty("valid_mobile"));
    }

    @Given("tc005 user Password kutusuna gecerli text girsin")
    public void tc005_user_Password_kutusuna_gecerli_text_girsin() {
        us002Page.passwordText.sendKeys(ConfigurationReader.getProperty("valid_password"));
    }

    @Then("tc005 user Confirm Password kutusuna gecerli text girsin")
    public void tc005_user_Confirm_Password_kutusuna_gecerli_text_girsin() {
        us002Page.rePasswordText.sendKeys(ConfigurationReader.getProperty("valid_password"));
        }

    @Then("tc005 user Sign Up butonuna tiklayabilmelidir")
    public void tc005_user_Sign_Up_butonuna_tiklayabilmelidir() {
        ReusableMethods.waitFor(1);
        us002Page.buttonSignIn.click();
        wait.until(ExpectedConditions.visibilityOf(us002Page.alertSuccess));
        Assert.assertTrue(us002Page.alertSuccess.isDisplayed());
        System.out.println(us002Page.alertSuccess.getText());
    }


    @Given("tc006 user Email {string} girer")
    public void tc006_user_Email_girer(String string) {
        us002Page.emailText.sendKeys(string);
        us002Page.buttonSignIn.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us002Page.alertWrongEmail.isDisplayed());
    }

    @Then("tc007 user Name {string} girer")
    public void tc007_user_Name_girer(String string) {
        us002Page.nameText.sendKeys(string);//TC hatali veya bug mevcut, negatif test calismiyor
        us002Page.buttonSignIn.click();
        Assert.assertEquals(3,5);
    }

    @Then("tc008 user Mobile {string} girer")
    public void tc008_user_Mobile_girer(String string) {
        us002Page.mobileText.sendKeys(string);//TC hatali veya bug mevcut, negatif test calismiyor
        us002Page.buttonSignIn.click();
        us002Page.mobileText.clear();
        Assert.assertEquals(3,5);
    }

    @Then("tc009 user Password {string} girer")
    public void tc009_user_Password_girer(String string) {
        us002Page.passwordText.sendKeys(string);
        us002Page.buttonSignIn.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us002Page.alertPassword.isDisplayed());
    }

    @Given("tc010 user Login Here yazisina tiklasin")
    public void tc010_user_Login_Here_yazisina_tiklasin() {
        us002Page.buttonLoginHere.click();
        Assert.assertTrue(us002Page.headerWelcomeBack.isDisplayed());
    }

    @Given("tc010 user yeni acilan sayfada Email ve Password text box'lari goruluyor olmalidir")
    public void tc010_user_yeni_acilan_sayfada_Email_ve_Password_text_box_lari_goruluyor_olmalidir() {
        Assert.assertTrue(us002Page.customerEmail.isDisplayed());
        Assert.assertTrue(us002Page.customerPassword.isDisplayed());
    }

    @Given("tc010 user password hatirlamiyor ise Forgot Password kutusuna tiklasin")
    public void tc010_user_password_hatirlamiyor_ise_Forgot_Password_kutusuna_tiklasin() {
        us002Page.buttonForgotPassword.click();
        wait.until(ExpectedConditions.visibilityOf(us002Page.headerForgotForm));
        Assert.assertTrue(us002Page.headerForgotForm.isDisplayed());
        System.out.println(us002Page.headerForgotForm.getText());
    }

    @Then("tc010 user Email kutusu oldugu ve veri gonderimi yapilabildigini assert etsin")
    public void tc010_user_Email_kutusu_oldugu_ve_veri_gonderimi_yapilabildigini_assert_etsin() {
        Assert.assertTrue(us002Page.textBoxEmail.isDisplayed());
        us002Page.textBoxEmail.sendKeys(ConfigurationReader.getProperty("valid_email"));
        us002Page.redButtonForgotPassword.click();
        Assert.assertTrue(us002Page.alertSorryNotExist.isDisplayed() || !us002Page.headerForgotForm.isDisplayed());

    }

}
