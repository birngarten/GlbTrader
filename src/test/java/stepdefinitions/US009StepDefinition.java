package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import pages.US009Page;
import utilities.Driver;

public class US009StepDefinition {

    US009Page us009Page=new US009Page();
    Actions actions;

    @Given("women clothing menusune tiklar")
    public void women_clothing_menusune_tiklar() {
        us009Page.womenClothingLink.click();
    }

    @And("Tassels Dresses menusune tiklar")
    public void tasselsDressesMenusuneTiklar() {

        us009Page.tasselLink.click();
    }

    @And("ilk urune menusune tiklar")
    public void ilkUruneMenusuneTiklar() throws InterruptedException {
        us009Page.ilkUrun.click();

        Driver.getDriver().manage().window().fullscreen();
    }

    @Then("urunun isminin istenilen sekilde oldugunu assert eder")
    public void urununIsmininIstenilenSekildeOldugunuAssertEder() {
        String expected="Meaneor Women Chiffon 13 Solid colors Summer Pretty Vestidos Famale elegant Pleated Dress Sleeveless Vest mini Dress With Belt";
        Assert.assertEquals(expected,us009Page.urunName.getText());
    }

    @Then("renkleri ve erisilebilir olduklarini assert eder")
    public void renkleriVeErisilebilirOlduklariniAssertEder() {
        String expectedRenkler[]={"Gray", "Red", "Pink", "Green", "Black", "Orange","White"};
        int say=0;
        for (String renk:expectedRenkler) {
            Assert.assertEquals(renk,us009Page.renkler.get(say).getAttribute("title"));
            Assert.assertTrue(us009Page.renkler.get(say).isEnabled());
            say++;

        }
    }

    @Then("bedenleri assert eder")
    public void bedenleriAssertEder() {
        String expectedBedenler[]={"S", "M", "L", "XL", "XXL"};
        int say=0;
        for (String beden:expectedBedenler) {
            System.out.println(us009Page.bedenler.get(say).getText());
            Assert.assertEquals(beden,us009Page.bedenler.get(say).getText());

            say++;

        }
    }

    @Then("fiyatlari assert eder")
    public void fiyatlariAssertEder() {
        String fiyatlar[]={"12","14","14","14","14"};
        for (int i=0;i<us009Page.renkler.size();i++){
            us009Page.renkler.get(i).click();
            for (int j=0;j<us009Page.bedenler.size();j++){
                us009Page.bedenler.get(j).click();
                Assert.assertEquals(fiyatlar[j],us009Page.fiyat.getText());
            }
        }
    }

    @And("searchboxa urun ismini girer")
    public void searchboxaUrunIsminiGirer() {
        String arananUrunName="Meaneor Women Chiffon 13 Solid colors Summer Pretty Vestidos Famale elegant Pleated Dress Sleeveless Vest mini Dress With Belt";
        us009Page.searchBox.sendKeys(arananUrunName);
        us009Page.searchBox.submit();

    }

    @Then("sonuclarda aranilan urun kontrol edilir")
    public void sonuclardaAranilanUrunKontrolEdilir() {
        Assert.assertTrue(us009Page.result.isDisplayed());
    }
}
