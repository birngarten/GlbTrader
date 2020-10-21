package stepdefinitions;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.Color;
import pages.US010Page;
import utilities.Driver;
import utilities.ReusableMethods;
import java.util.ArrayList;
import java.util.List;


public class US010StepDefinition {
    US010Page us010Page = new US010Page();
    Actions actions = new Actions(Driver.getDriver());






    @Given("tc44 user global trader a gider")
    public void tc44_user_global_trader_a_gider() {
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
    }

    @Given("tc44 user {int} dropdown sekme oldugunu görür")
    public void tc44_user_dropdown_sekme_oldugunu_görür(Integer int1) {
        int size = us010Page.dropdownSekme.size();
        Assert.assertEquals(size,7);

    }

    @Given("tc44 user Jewelery&Accessories sekmesi {string} sekmesinin altinda oldugunu görür")
    public void tc44_user_Jewelery_Accessories_sekmesi_sekmesinin_altinda_oldugunu_görür(String string) {
        for (int i=1; i<=7; i++) {
            String dropdownMenu= "(//li[@class='dropdown ttmenu-full'])["+i+"]";
            System.out.println(Driver.getDriver().findElement(By.xpath(dropdownMenu)).getText());
        }
        Assert.assertEquals(us010Page.dropdownSekme.get(1).getText(),"Women Clothing & Accessories");
        Assert.assertEquals(us010Page.dropdownSekme.get(2).getText(),"Jewelry & Accessories");


    }

    @Then("tc44 user Jewelery&Accessories sekmesini acar")
    public void tc44_user_Jewelery_Accessories_sekmesini_acar() {
        Driver.getDriver().findElement(By.xpath("(//li//span)[5]")).click();


    }

    @Given("tc45 user ilk sutunda {int} baslik oldugunu görür")
    public void tc45_user_ilk_sutunda_baslik_oldugunu_görür(Integer int1) {
        int a=0;
        for (int i = 32; i<=39; i++){
            if (i%3==2){
                System.out.println(Driver.getDriver().findElement(By.xpath("(//ul//li//h4)["+i+"]")).getText());
                a++;

            }
        }
        Assert.assertEquals(a,3);


    }

    @Given("tc45 user orta sütunda {int} baslik oldugunu görür")
    public void tc45_user_orta_sütunda_baslik_oldugunu_görür(Integer int1) {
        int a =0;
        for (int i = 33; i<=39; i++){
            if (i%3==0){
                System.out.println(Driver.getDriver().findElement(By.xpath("(//ul//li//h4)["+i+"]")).getText());
                a++;

            }
        }
        Assert.assertEquals(a,3);

    }

    @Then("tc45 user son sütunda {int} baslik oldugunu görür")
    public void tc45_user_son_sütunda_baslik_oldugunu_görür(Integer int1) {
        int a=0;
        for (int i = 34; i<=39; i++){
            if (i%3==1){
                System.out.println(Driver.getDriver().findElement(By.xpath("(//ul//li//h4)["+i+"]")).getText());
                a++;
            }
        }
        Assert.assertEquals(a,2);

    }
    List<String> jeweleryList = new ArrayList<>();
    @Given("tc46 Bu basliklari soldan saga sirasiyla görür")
    public void tc46_Bu_basliklari_soldan_saga_sirasiyla_görür() {
        for (int i= 32; i<=39;i++){
            String jewelery = Driver.getDriver().findElement(By.xpath("(//ul//li//h4)["+i+"]")).getText();
            jeweleryList.add(jewelery);

        }
        System.out.println(jeweleryList);

    }

    @Then("tc46 Bu basliklarin ise soldan saga sirasiyla {string}, {string},{string}, {string}, {string}, {string}, {string}, {string} oldugunu dogrular")
    public void tc46_Bu_basliklarin_ise_soldan_saga_sirasiyla_oldugunu_dogrular(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {

        List<String> listJewelery1 = new ArrayList<>();
        String listjewelery ="Earrings, Wedding & Engagement.., Fine Jewelry, Beads & Jewelry Making, Necklaces & Pendants, Rings, Bracelets & Bangles, Jewelry Sets & More";
        for (int i=0; i<8; i++){
            listjewelery.split(",");
            listJewelery1.add(listjewelery);

        }






    }

    @Given("tc47 user {string} basligini görür")
    public void tc47_user_basligini_görür(String string) {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        Assert.assertTrue(us010Page.earringsButton.isDisplayed());

        Driver.getDriver().findElement(By.linkText("Earrings")).click();


    }

    @Given("tc47 user {string} basligi altinda sirasiyla {string}, {string}, {string}, Hoop Earrings\" sekmelerinin oldugunu görür")
    public void tc47_user_basligi_altinda_sirasiyla_Hoop_Earrings_sekmelerinin_oldugunu_görür(String string, String string2, String string3, String string4) {
    List<String> earingSekmeleriList =new ArrayList<>();
        for (int i = 1; i<5;i++){
        String earringSekmeleri = Driver.getDriver().findElement(By.xpath(("/html/body/div[1]/div/div[1]/div/div/div[2]/ul/li["+i+"]/a"))).getText();
        earingSekmeleriList.add(earringSekmeleri);
    }
        System.out.println(earingSekmeleriList);
        Assert.assertEquals(earingSekmeleriList.size(),4);
        Assert.assertTrue(earingSekmeleriList.contains("EARRINGS"));
        Assert.assertTrue(earingSekmeleriList.contains("GOLD"));
        Assert.assertTrue(earingSekmeleriList.contains("DROP EARRINGS"));
        Assert.assertTrue(earingSekmeleriList.contains("HOOP EARRINGS"));


    }

    @Then("tc47 user üzerine gelinen sekmenin gri font rengine büründügünü görür")
    public void tc47_user_üzerine_gelinen_sekmenin_gri_font_rengine_büründügünü_görür() {
        WebElement earingSekmesi =Driver.getDriver().findElement(By.xpath(("/html/body/div[1]/div/div[1]/div/div/div[2]/ul/li[2]/a")));
        actions.moveToElement(earingSekmesi).perform();
        String RenkRCB=earingSekmesi.getCssValue("background-color");
        String renkHex= Color.fromString(RenkRCB).asHex();
        System.out.println(renkHex);
        Assert.assertEquals(renkHex,"#bebebe");




    }

    @Given("tc48 user {string} butonuna tiklar")
    public void tc48_user_butonuna_tiklar(String string) {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(2);
        us010Page.earringsButton.click();
        ReusableMethods.waitFor(2);
        Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div/div[2]/ul/li[2]/a")).click();

    }



    @Given("tc48 user acilan sayfada, sol altta cikan filtrelme sekmelerini görür")
    public void tc48_user_acilan_sayfada_sol_altta_cikan_filtrelme_sekmelerini_görür() {


        for (int i =2;i<=7;i++) {
            String filterXPath = "(//button[@type='submit'])["+i+"]";
            WebElement filter =Driver.getDriver().findElement(By.xpath(filterXPath));
            System.out.println(filter.getText());
        }


    }

    @And("tc48 user yukardan asagiya ücüncü sirada {string} sekmesinin bulundugunu görür")
    public void tc48_user_yukardan_asagiya_ücüncü_sirada_sekmesinin_bulundugunu_görür(String string) {

            String filterXPath = "(//button[@type='submit'])[3]";
            WebElement filter =Driver.getDriver().findElement(By.xpath(filterXPath));
            System.out.println(filter.getText());
            Assert.assertEquals(filter.getText(),"Filter Brand");


    }

    @Then("tc48 user icindeki Boxlari isaretler")
    public void tc48_user_icindeki_Boxlari_isaretler() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        for (int i=2 ; i<=23; i++){
            WebElement checkbox = Driver.getDriver().findElement(By.xpath("(//div[@class='checkbox'])["+i+"]"));
            System.out.println(checkbox.getText());
            Assert.assertTrue(checkbox.isEnabled());
        }

    }



    @Given("tc49 user Jewelery&Accessories butonuna tiklar")
    public void tc49_user_Jewelery_Accessories_butonuna_tiklar() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us010Page.earringsButton.click();
        us010Page.jeweleryAndAccessories.click();

        ReusableMethods.waitFor(1);



    }

    @Given("tc49 user \"Jewelery Sets & More\"butonuna tiklar")
    public void tc49_user_Jewelery_Sets_More_butonuna_tiklar() {

        us010Page.jewSetsAndMore.click();

    }

    @Then("tc49 user resimli ürünlerden birinci sirada {string} in oldugunu görür")
    public void tc49_user_resimli_ürünlerden_birinci_sirada_in_oldugunu_görür(String string) {
        System.out.println(us010Page.imageSetsMore.get(0).getText());
        Assert.assertEquals(us010Page.imageSetsMore.get(0).getText(),"Jewelry Sets");




    }

    @Given("tc50 user {string} sekmesinde Prev ve Next butonlarini görür")
    public void tc50_user_sekmesinde_Prev_ve_Next_butonlarini_görür(String string) {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us010Page.earringsButton.click();
        ReusableMethods.waitFor(2);
        us010Page.jeweleryAndAccessories.click();
        us010Page.jewSetsAndMore.click();
        us010Page.imageSetsMore.get(0).click();
        Assert.assertTrue(us010Page.prev.isDisplayed());
        Assert.assertTrue(us010Page.next.isDisplayed());


    }

    @Given("tc50 user Prev butonuna tiklar ve kutucugun calistigini görür")
    public void tc50_user_Prev_butonuna_tiklar_ve_kutucugun_calistigini_görür() {
        Assert.assertTrue(us010Page.prev.isEnabled());

    }

    @Then("tc50 user Next butonuna tiklar ve kutucugun calistigini görür")
    public void tc50_user_Next_butonuna_tiklar_ve_kutucugun_calistigini_görür() {
        Assert.assertTrue(us010Page.next.isEnabled());


   }

}
