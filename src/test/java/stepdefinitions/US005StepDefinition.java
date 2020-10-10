package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.US005Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US005StepDefinition {

    US005Page us005Page = new US005Page();

    @Given("kullanici {string} sayfaya gider")
    public void kullanici_sayfaya_gider(String string) {

        Driver.getDriver().get(string);

    }

    @Given("TC020 kullanici about us sayfasi tiklandiginda acilabilir oldugunu verify eder")
    public void tc020_kullanici_about_us_sayfasi_tiklandiginda_acilabilir_oldugunu_verify_eder() {
        Assert.assertTrue(us005Page.aboutUsLink.isEnabled());
        us005Page.aboutUsLink.click();

    }

    @Given("TC021 kullanici about us title ve header about us olarak görüldügünü verify eder")
    public void tc021_kullanici_about_us_title_ve_header_about_us_olarak_görüldügünü_verify_eder() {
        String aboutUsTitle = Driver.getDriver().getTitle();
        System.out.println("About Us Title : " + aboutUsTitle);
        Assert.assertEquals(aboutUsTitle,"About Us");

        Assert.assertEquals(us005Page.aboutUsHeader.getText(),"About Us");

    }

    @Given("TC022 kullanici tel nosunun {string} oldugunu verify eder")
    public void tc022_kullanici_tel_nosunun_oldugunu_verify_eder(String string) {
        Assert.assertTrue(us005Page.telefonText.getText().contains(string));


    }

    @Then("TC023 kullanici metnin icerigini verify eder")
    public void tc023_kullanici_metnin_icerigini_verify_eder() {
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us005Page.metinText.getText().contains("B2B marketplace for Small & Medium"));

    }
}
