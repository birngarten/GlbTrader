package stepdefinitions;

import io.cucumber.java.en.Given;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US014Page;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;

import javax.swing.*;

public class US014StepDefinitions {

    US014Page us014Page=new US014Page();
    Actions action=new Actions(Driver.getDriver());
    WebDriverWait wait= new WebDriverWait(Driver.getDriver(),20);
    ReusableMethods reuse;





    @Given("user SelectLanguage box'a tiklar")
    public void user_SelectLanguage_box_a_tiklar() {
        Driver.getDriver().get(ConfigurationReader.getProperty("glb_trader_URL"));
        us014Page.selectLanguegeBox.click();


    }

    @Given("TC066 user menu box aktif mi")
    public void tc066_user_menu_box_aktif_mi() {
        Assert.assertTrue(us014Page.selectLanguegeBox.isEnabled());
        us014Page.selectLanguegeBox.click();




    }

    @Given("TC066 user tiklayinca asagida tüm dil seceneklerinin gorundugunu verify ediniz.")
    public void tc066_user_tiklayinca_asagida_tüm_dil_seceneklerinin_gorundugunu_verify_ediniz() {
        Driver.getDriver().switchTo().frame(us014Page.iframeLanguage);
        System.out.println(us014Page.menuBodyDil.getText());


    }

    @Given("TC067 Dil secenek tablosu sayfada bos bir yere tiklandiginda kapanir")
    public void tc067_Dil_secenek_tablosu_sayfada_bos_bir_yere_tiklandiginda_kapanir() {
        ReusableMethods.waitFor(2);
        us014Page.sayfadaBirYer.click();

    }

    @Given("TC068 Secilen dil Hover yapildiginda mavi oldugunu verify ediniz.")
    public void tc068_Secilen_dil_Hover_yapildiginda_mavi_oldugunu_verify_ediniz() {
        us014Page.selectLanguegeBox.click();
        ReusableMethods.waitFor(2);
        Driver.getDriver().switchTo().frame(us014Page.iframeLanguage);
        ReusableMethods.waitFor(2);
        int count=5;
        for (WebElement element:us014Page.backGroundFarbe){
            action.moveToElement(element).build().perform();
            ReusableMethods.waitFor(2);
            String backGroundFarbe = element.getCssValue("background-color");
            System.out.println(backGroundFarbe);
            String colorHex = Color.fromString(backGroundFarbe).asHex();
            System.out.println(colorHex);
            ReusableMethods.waitFor(1);
            Assert.assertEquals(colorHex, "#3366cc");
            if (count==10){
                break;
            }


            count++;
        }






    }

    @Given("TC069 Almanca tiklandiginda Almanca dilinde verify ediniz.")
    public void tc069_Almanca_tiklandiginda_Almanca_dilinde_verify_ediniz() {
        //us014Page.selectLanguegeBox.click();

        Driver.getDriver().switchTo().frame(us014Page.iframeLanguage);
        action.click(us014Page.deutschLanguage).build().perform();
        //us014Page.getDilText.get(31).click();
        ReusableMethods.waitFor(5);
        Assert.assertTrue(us014Page.getGermanText.getText().contains("Herrenbekleidung"));//German text degistirilebilir.







    }

    @Given("TC069 Ingilizce tiklandiginda Ingilizce dilinde verify ediniz.")
    public void tc069_Ingilizce_tiklandiginda_Ingilizce_dilinde_verify_ediniz() {

        Driver.getDriver().switchTo().frame(us014Page.iframeLanguage);
        action.click(us014Page.englishLanguage).build().perform();
        //us014Page.getDilText.get(31).click();
        ReusableMethods.waitFor(5);
        Assert.assertTrue(us014Page.getEnglishText.getText().contains("Men Clothing"));//German text degistirilebilir.


    }



}
