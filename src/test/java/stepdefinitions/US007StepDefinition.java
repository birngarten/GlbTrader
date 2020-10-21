package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US007Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US007StepDefinition {

    US007Page us007Page = new US007Page();
    Select select = new Select(us007Page.allCategoriesDropdown);
    JavascriptExecutor js = (JavascriptExecutor)Driver.getDriver();

    @Given("tc029 kullanici all categories de dropbox secenek sayisini bulur")
    public void tc029_kullanici_all_categories_de_dropbox_secenek_sayisini_bulur() {
//        "All Categories" dropBox icinde var olan  secenek sayisi bulunabilir olsun.
        int tumSecenekler = us007Page.allCategories.size();
        System.out.println("All Categories secenek sayisi : "+ tumSecenekler ); //26

    }

    @Given("tc030 kullanici besinci sirada computer&office secer ve bir urun ismi girip sonuc alir")
    public void tc030_kullanici_besinci_sirada_computer_office_secer_ve_bir_urun_ismi_girip_sonuc_alir() {
//        5 . sirada Computer & Office secenegi  secilebilir olsun  ve ilgili alanda bir urun ismi girilip
//        sonuc ulasilabilir olsun .

        select.selectByVisibleText("Computer & Office");

        us007Page.searchBox.sendKeys("Silicon Power");
        us007Page.submitAllCategoriesButon.click();
        us007Page.appleIpad.isDisplayed();

    }

    @Given("tc031 kullanici computer&office aranan urunun  sayfasinda  GLOBAL TRADER  logosu gorur")
    public void tc031_kullanici_computer_office_aranan_urunun_sayfasinda_GLOBAL_TRADER_logosu_gorur() {
//   Computer & Office dropdown   ile aranmis olan urunun  sayfasinda  GLOBAL TRADER  logosu gorunur olsun.

        js.executeScript("arguments[0].value = '';", us007Page.searchBox); // Bununla searchBox bosaltiliyor
        us007Page.searchBox.sendKeys("Silicon Power");

        us007Page.submitAllCategoriesButon.click();
        Assert.assertTrue(us007Page.glbTraderLogo.isDisplayed());

    }

    @Given("tc032 kullanici urunu All Categories,Computer and Office,Electronic Components & Supplies arar ve karsilastirir")
    public void tc032_kullanici_urunu_All_Categories_Computer_and_Office_Electronic_Components_Supplies_arar_ve_karsilastirir() {
//     "Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Display" urunu  hem All Categories, Computer and
//     Office ve "Electronic Components & Supplies" de arayiniz ve sonuclarinin ayni olup olmadigini kiyaslayiniz

        js.executeScript("arguments[0].value = '';", us007Page.searchBox);
        us007Page.searchBox.sendKeys("Apple iPad");
        us007Page.submitAllCategoriesButon.click();
        String a = us007Page.urunAllCategories.getText();
        System.out.println(a); //Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Displaysdafas

        js.executeScript("arguments[0].value = '';", us007Page.searchBox);
        select.selectByVisibleText("Computer & Office");
        us007Page.searchBox.sendKeys("Apple iPad");
        us007Page.submitAllCategoriesButon.click();
        String b = us007Page.urunComputerOffice.getText();
        System.out.println(b);//Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Displaysdafas

        js.executeScript("arguments[0].value = '';", us007Page.searchBox);
        select.selectByVisibleText("Electronic Components & Supplies");
        us007Page.searchBox.sendKeys("Apple iPad");
        us007Page.submitAllCategoriesButon.click();
        String c = us007Page.urunElectCompSupplies.getText();
        System.out.println(c);//Record Not Found..

        Assert.assertEquals(a,b);
        Assert.assertFalse(a.equals(c));
    }

    @Then("tc033 kullanici ranan urunun  fiyati, resmi ve titlesinin gorunup gorunmedini verify edr")
    public void tc033_kullanici_ranan_urunun_fiyati_resmi_ve_titlesinin_gorunup_gorunmedini_verify_edr() {
//        Aranan urunun  fiyat , urunun resmi ve Title gorunup gorunmedini verifiye ediniz .
        js.executeScript("arguments[0].value = '';", us007Page.searchBox);
        select.selectByVisibleText("Consumer Electronics");
        us007Page.searchBox.sendKeys("Canon");
        us007Page.submitAllCategoriesButon.click();

        String canonTitle = Driver.getDriver().getTitle();

        Assert.assertTrue(canonTitle.equals(""));
        Actions actions = new Actions(Driver.getDriver());
        actions.sendKeys(Keys.ARROW_DOWN).perform();
        Assert.assertTrue(us007Page.canonFiyat.isDisplayed());
        Assert.assertTrue(us007Page.canonFoto.isDisplayed());





    }

}
