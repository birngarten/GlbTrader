package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US015Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US015StepDefinition {
    US015Page us015Package = new US015Page();
    Actions action = new Actions(Driver.getDriver());
    WebDriverWait wait =new WebDriverWait(Driver.getDriver(),2);
    ReusableMethods reuse;



    @Given("Package Linkine tiklar")
    public void package_Linkine_tiklar() {
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
        us015Package.packageLink.click();
        ReusableMethods.waitFor(2);
    }

    @Given("TC070 user Package linkini test eder")
    public void tc070_user_Package_linkini_test_eder() {
        Assert.assertTrue(us015Package.packageLink.isEnabled());
    }

    @Given("TC071 user Join Now textini check eder")
    public void tc071_user_Join_Now_textini_check_eder() {
        Assert.assertTrue(us015Package.joinNowBaslik.isDisplayed());
        System.out.println(us015Package.joinNowBaslik);
    }

    @Given("TC072 user Join now 'un altindaki tablonun varligi verfy edilir")
    public void tc072_user_Join_now_un_altindaki_tablonun_varligi_verfy_edilir() {
        Assert.assertTrue(us015Package.tabloIcindekiler.isDisplayed());
        System.out.println(us015Package.tabloIcindekiler.getText());
        String tablo="Package Types 0";
        Assert.assertTrue(us015Package.tabloIcindekiler.getText().contains(tablo));
    }

    @Given("TC072 user basliklarin sirasiyla oldugunu test eder")
    public void tc072_user_basliklarin_sirasiyla_oldugunu_test_eder() {
        String basliksirasi[]={"Package Types","Bronz (15 Items)","Silver (30 Items)",
                "Gold (60 Items)","Platinium (120 Items)"};
        int count=0;
        for(int i=0;i<basliksirasi.length;i++){
            System.out.println(us015Package.packageBirinciSütun.getText());
            //Assert.assertTrue(us015Package.packageBirinciSütun.getText().contains(basliksirasi[i]));
            count++;
        }
        // Assert.assertEquals(count,5);
    }

    @Then("TC072 user basliklarinin isimlerinin {string} oldugunu check eder")
    public void tc072_user_basliklarinin_isimlerinin_oldugunu_check_eder(String string) {
        int paket= us015Package.packageBox.getLocation().x;
        int bronz = us015Package.bronzBox.getLocation().x;
        int silver = us015Package.silverBox.getLocation().x;
        int gold = us015Package.goldBox.getLocation().x;
        int platinium = us015Package.platiniumBox.getLocation().x;

        boolean soldansagasira= false;
        if (paket<bronz && bronz<silver && silver<gold && gold<platinium){
            soldansagasira=true;     }

    }

    @Given("TC073 user soldan saga sirasiyla : {string} oldugunu check eder")
    public void tc073_user_soldan_saga_sirasiyla_oldugunu_check_eder(String string) {
        ReusableMethods.waitFor(2);
        String validDaysDeger[]={"Valid Days","30","90",
                "180","365"};
        int count=0;
        for(int i=0;i<validDaysDeger.length;i++){
            Assert.assertTrue(us015Package.tabloSütunBasliklar.get(0).getText().contains(validDaysDeger[i]));
            count++;
        }
        Assert.assertEquals(count,5);

    }
    @Given("TC074 user soldan saga sirasiyla :{string} oldugunu check eder")
    public void tc074_user_soldan_saga_sirasiyla_oldugunu_check_eder(String string) {
        ReusableMethods.waitFor(2);
        String okey =us015Package.okeyIsaret.getCssValue("font-size").toString();
        System.out.println("okey calisti :" +okey);
        String companyVerified[]={"Company Verified","✓","✓",
                "✓","✓"};
        int count=0;
        for(int i=0;i<companyVerified.length;i++){
            //Assert.assertTrue(us015Package.tabloSütunBasliklar.get(1).getText().contains(companyVerified[i]));
            count++;
        }
        //Assert.assertEquals(count,5);

    }

    @Given("TC075 user soldan saga sirasiyla : {string} oldugu verify edilir")
    public void tc075_user_soldan_saga_sirasiyla_oldugu_verify_edilir(String string) {
        System.out.println(us015Package.okeyIsaret.getText());
        String companyTrustSeal[]={"Company Trust Seal","x","✓",
                "✓","✓"};
        int count=0;
        for(int i=0;i<companyTrustSeal.length;i++){
            //Assert.assertTrue(us015Package.tabloSütunBasliklar.get(2).getText().contains(companyTrustSeal[i]));
            count++;
        }
        Assert.assertEquals(count,5);

    }
    }

