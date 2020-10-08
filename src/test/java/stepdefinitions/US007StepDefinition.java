package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
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

        us007Page.searchBox.sendKeys("Apple iPad");
        us007Page.submitAllCategoriesButon.click();
        us007Page.appleIpad.isDisplayed();

    }

    @Given("tc031 kullanici computer&office aranan urunun  sayfasinda  GLOBAL TRADER  logosu gorur")
    public void tc031_kullanici_computer_office_aranan_urunun_sayfasinda_GLOBAL_TRADER_logosu_gorur() {
//   Computer & Office dropdown   ile aranmis olan urunun  sayfasinda  GLOBAL TRADER  logosu gorunur olsun.
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),5);
        wait.until(ExpectedConditions.visibilityOf(us007Page.searchBox)).clear();
        us007Page.searchBox.clear();

        us007Page.searchBox.sendKeys("Apple iPad");
        us007Page.submitAllCategoriesButon.click();

        Assert.assertTrue(us007Page.glbTraderLogo.isDisplayed());


    }

    @Given("tc032 kullanici test case de belirlenen sartlara gore urun aramasi yapar")
    public void tc032_kullanici_test_case_de_belirlenen_sartlara_gore_urun_aramasi_yapar() {
//        "Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Display" urunu
//        hem All Categories de hem de Computer and Office de hemde "Electronic Components & Supplies" de
//        arayiniz ve sonuclari kiyaslayiniz hepsinde de  ayni sonuc cikti mi diye .
        ReusableMethods.waitFor(3);
        us007Page.searchBox.clear();
        us007Page.searchBox.sendKeys("Apple iPad Pro");
        us007Page.submitAllCategoriesButon.click();

        select.selectByVisibleText("Computer & Office");
        us007Page.searchBox.clear();
        us007Page.searchBox.sendKeys("Apple iPad Pro");
        us007Page.submitAllCategoriesButon.click();

        select.selectByVisibleText("Electronic Components & Supplies");
        us007Page.searchBox.clear();
        us007Page.searchBox.sendKeys("Apple iPad Pro");
        us007Page.submitAllCategoriesButon.click();


    }

    @Then("tc033 kullanici aranan urunun sonuclarini test case de belirtilen sekilde kiyaslayarak test yapar")
    public void tc033_kullanici_aranan_urunun_sonuclarini_test_case_de_belirtilen_sekilde_kiyaslayarak_test_yapar() {


    }

}
