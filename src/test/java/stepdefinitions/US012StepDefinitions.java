package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US012Page;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;


public class US012StepDefinitions {
    US012Page us012Page = new US012Page();
    Actions action=new Actions(Driver.getDriver());
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    ReusableMethods reuse;




    @Given("user glbTrader sayfasina gider")
    public void user_glbTrader_sayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("glb_trader_URL"));

    }

    @Given("user Computer-Office menusune tiklar")
    public void user_Computer_Office_menusune_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.linkComputerMenu.click();
        //Assert.assertTrue(us012Page.linkComputerMenu.isEnabled());

    }


    @Given("user HomePage Tablets linkine tiklar")
    public void user_HomePage_Tablets_linkine_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.linkTablets.click();

    }

    @Given("user Tablets in altindaki iPad linkine tiklar")
    public void user_Tablets_in_altindaki_iPad_linkine_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.linkIpad.click();


    }

    @Given("user Apple iPad Pro ürünene tiklar")
    public void user_Apple_iPad_Pro_ürünene_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.ipadProLink.click();
        action.sendKeys(Keys.PAGE_DOWN).perform();

    }

    @Given("TC054 user Computer-Office menususu aktifmi?")
    public void tc054_user_Computer_Office_menususu_aktifmi() {
        Assert.assertTrue(us012Page.linkComputerMenu.isEnabled());

    }


    @Given("TC055 Ana sayfadan Computer & Office > Tablets > iPad > Apple iPad Pro.. secenekleri sirasiyla tiklandigini assert edin")
    public void tc055_Ana_sayfadan_Computer_Office_Tablets_iPad_Apple_iPad_Pro_secenekleri_sirasiyla_tiklandigini_assert_edin() {
        Assert.assertTrue(us012Page.linkComputerMenu.isEnabled());
        Assert.assertTrue(us012Page.linkTablets.isEnabled());
        Assert.assertTrue(us012Page.linkIpad.isEnabled());
        Assert.assertTrue(us012Page.ipadProLink.isEnabled());

    }

    @Given("TC055 user Buy Now linkine tiklar")
    public void tc055_user_Buy_Now_linkine_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.buyNow.click();


    }

    @Given("TC055 user verileri girmeden Login ine tiklar")
    public void tc055_user_verileri_girmeden_Login_ine_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.loginButton.click();


    }

    @Then("TC055 user ürünün alinabilirligini test eder")
    public void tc055_user_ürünün_alinabilirligini_test_eder() {

    }

    @Given("TC056 user Add to wish liste tiklar")
    public void tc056_user_Add_to_wish_liste_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.addToWish.click();


    }

    @Then("TC056 user alert olarak ilgili bilgiyi görür")
    public void tc056_user_alert_olarak_ilgili_bilgiyi_görür() {
        String text;
        ReusableMethods.waitFor(1);
        System.out.println(us012Page.publicMessages.getText());




    }

    @Given("TC057 user Feedback box a tiklar")
    public void tc057_user_Feedback_box_a_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.feedbackLink.click();
        action.sendKeys(Keys.PAGE_DOWN).perform();

    }

    @Given("TC057 user adini girer ve comment yazar")
    public void tc057_user_adini_girer_ve_comment_yazar() {

        action.click(us012Page.yourName).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us012Page.yourName.isDisplayed());
        us012Page.yourName.sendKeys("Ahmet Gel");

        ReusableMethods.waitFor(2);
        us012Page.commentText.click();
        us012Page.commentText.sendKeys("Urunu cok begendim");
        //Assert.assertTrue(us012Page.commentText.getText().contains("Urunu cok begendim"));
        ReusableMethods.waitFor(1);
        action.click(us012Page.leaveARivew1).perform();
        ReusableMethods.waitFor(2);
        System.out.println(us012Page.alertFeedbackMessage.getText());


    }

    @Given("TC057 user Leave a Rivew butonuna tiklar")
    public void tc057_user_Leave_a_Rivew_butonuna_tiklar() {
        ReusableMethods.waitFor(2);
        action.click(us012Page.leaveARivew1).perform();



    }

    @Then("TC057 user alert olarak ilgili bilgiyi görür")
    public void tc057_user_alert_olarak_ilgili_bilgiyi_görür() {
        ReusableMethods.waitFor(2);
        System.out.println(us012Page.alertFeedbackMessage.getText());


    }

    @Given("TC058 Store info bolumundeki contact now linkine tiklar")
    public void tc058_Store_info_bolumundeki_contact_now_linkine_tiklar() {
        ReusableMethods.waitFor(2);
        action.click(us012Page.contactNowLinki).perform();

    }

    @Given("TC058 user Contact Us taki Inquiry Formu doldurur")
    public void tc058_user_Contact_Us_taki_Inquiry_Formu_doldurur() {

        action.click(us012Page.enterName).perform();
        us012Page.enterName.sendKeys("Ahmet Gel");
        Assert.assertTrue(us012Page.enterName.getText().contains("Ahmet Gel"));
        ReusableMethods.waitFor(2);
        action.click(us012Page.enterEmail).perform();
        us012Page.enterEmail.sendKeys("agel@gmail.com");
        Assert.assertTrue(us012Page.enterEmail.getText().contains("agel@gmail.com"));
        ReusableMethods.waitFor(2);
        us012Page.enterEmail.sendKeys("agel@gmail.com");
        Assert.assertTrue(us012Page.enterMobile.getText().contains("+49"));
        ReusableMethods.waitFor(2);
        us012Page.enterMobile.sendKeys("+49");
        Assert.assertTrue(us012Page.enterEmail.getText().contains("agel@gmail.com"));
        ReusableMethods.waitFor(2);
        us012Page.enterMessage.sendKeys("Alles gut");
        Assert.assertTrue(us012Page.enterMessage.getText().contains("Alles gut"));



    }

    @Then("TC058 user Send butonunu tiklar")
    public void tc058_user_Send_butonunu_tiklar() {
        ReusableMethods.waitFor(2);
        us012Page.sendButonu.click();

    }


}
