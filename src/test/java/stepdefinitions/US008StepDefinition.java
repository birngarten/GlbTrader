package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.US008Page;
import utilities.Driver;

public class US008StepDefinition {

    US008Page us008Page=new US008Page();


    @Given("kullanici glbtrader sayfasina gider")
    public void kullanici_glbtrader_sayfasina_gider() {
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
    }

    @Given("all categories dropboxuna tiklar")
    public void all_categories_dropboxuna_tiklar() {
        Select select= new Select(us008Page.searchBox);
        select.selectByValue("1");
        Assert.assertEquals("Men Clothing & Accessories",select.getFirstSelectedOption().getText());
    }

    @Then("Men Clothing & Accessories var mi verify eder")
    public void men_Clothing_Accessories_var_mi_verify_eder() {

    }
    @Given("CATEGORIES See All linkine tiklar")
    public void categories_See_All_linkine_tiklar() {
        us008Page.seeAllLink.click();
    }

    @Given("Jeans linkine tiklar")
    public void jeans_linkine_tiklar() {
      us008Page.jeansLink.click();
    }

    @Then("urun sayisini assert eder")
    public void urunSayisiniAssertEder() {
        Assert.assertTrue(us008Page.jeansResult.isDisplayed());
    }

    @And("Men Clothing & Accessories linkine tiklar")
    public void menClothingAccessoriesLinkineTiklar() {
        us008Page.menClothingLink.click();
    }

    @Then("icerideki urun sayisini assert eder")
    public void iceridekiUrunSayisiniAssertEder() {
        System.out.println(us008Page.menClothingUrunList.toString());
    }



    @Then("ilk urunun font sizeni assert eder")
    public void ilkUrununFontSizeniAssertEder() {
        String fontSize=us008Page.sunglassesLink.getCssValue("font-size");
        Assert.assertEquals(fontSize,"14px");
    }

    @And("linke tiklar")
    public void linkeTiklar() {
        us008Page.menClothingUrunList.get(6).click();
    }

    @And("Jackets&Coats menusune tiklar")
    public void jacketsCoatsMenusuneTiklar() {
        us008Page.jacketsLink.click();
    }

    @And("blazer linkine tiklar")
    public void blazerLinkineTiklar() {
        us008Page.blazerLink.click();
    }

    @Then("gerekli kisimlari assert eder")
    public void gerekliKisimlariAssertEder() {
        Assert.assertTrue(us008Page.PriceFilter.isEnabled());
        Assert.assertTrue(us008Page.brandCheck.isEnabled());
        Assert.assertTrue(us008Page.sizeL.isEnabled());
        Assert.assertTrue(us008Page.regularLenght.isEnabled());
        Assert.assertTrue(us008Page.hooded.isEnabled());
        Assert.assertTrue(us008Page.lenghtFull.isEnabled());

    }

    @And("shoes menusune tiklar")
    public void shoesMenusuneTiklar() {
        us008Page.menClothingUrunList.get(14).click();
    }

    @And("boots linkine tiklar")
    public void bootsLinkineTiklar() {
        us008Page.bootsLink.click();
    }

    @Then("numaranin secilebildigi assert edilir")
    public void numaraninSecilebildigiAssertEdilir() {
        Assert.assertTrue(us008Page.bootnumber.isEnabled());
    }
}