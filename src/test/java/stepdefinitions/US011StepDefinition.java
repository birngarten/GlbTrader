package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US011Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US011StepDefinition {

    US011Page us011Page=new US011Page();
    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    Actions actions=new Actions(Driver.getDriver());


    @Then("tc051 user Cellphones Telecommunications linkine tiklandiginda ilgili sayfaya ulassin")
    public void tc051_user_Cellphones_Telecommunications_linkine_tiklandiginda_ilgili_sayfaya_ulassin() {
        us011Page.linkCellphonesTelecommunications.click();
        wait.until(ExpectedConditions.visibilityOf(us011Page.titleMobilePhones));
        Assert.assertTrue(us011Page.titleMobilePhones.isDisplayed());
    }

    @Given("user Cellphones Telecommunications linkine tiklasin")
    public void user_Cellphones_Telecommunications_linkine_tiklasin() {
        us011Page.linkCellphonesTelecommunications.click();
    }

    @Given("tc052 user CATEGORIES altinda Mobile Phones elementinin goruldugunu assert ediniz.")
    public void tc052_user_CATEGORIES_altinda_Mobile_Phones_elementinin_goruldugunu_assert_ediniz() {
        wait.until(ExpectedConditions.visibilityOf(us011Page.titleMobilePhones));
        Assert.assertTrue(us011Page.titleMobilePhones.isDisplayed());
    }

    @Given("tc052 user CATEGORIES altinda Phone Bags & Cases elementinin goruldugunu assert ediniz.")
    public void tc052_user_CATEGORIES_altinda_Phone_Bags_Cases_elementinin_goruldugunu_assert_ediniz() {
        Assert.assertTrue(us011Page.titlePhoneBagsCases.isDisplayed());
    }

    @Given("tc052 user CATEGORIES altinda Mobile Phone Accessories elementinin goruldugunu assert ediniz.")
    public void tc052_user_CATEGORIES_altinda_Mobile_Phone_Accessories_elementinin_goruldugunu_assert_ediniz() {
        Assert.assertTrue(us011Page.titleMobilePhoneAccessories.isDisplayed());
    }

    @Given("tc052 user CATEGORIES altinda Mobile Phone Parts elementinin goruldugunu assert ediniz.")
    public void tc052_user_CATEGORIES_altinda_Mobile_Phone_Parts_elementinin_goruldugunu_assert_ediniz() {
        Assert.assertTrue(us011Page.titleMobilePhoneParts.isDisplayed());
    }

    @Then("tc052 user CATEGORIES altinda Power Bank elementinin goruldugunu assert ediniz.")
    public void tc052_user_CATEGORIES_altinda_Power_Bank_elementinin_goruldugunu_assert_ediniz() {
        Assert.assertTrue(us011Page.titlePowerBank.isDisplayed());
    }

    @Given("tc053 user Mobile Phones yazisina tiklasin ve ilgili sayfadaki ilk urune ulassin")
    public void tc053_user_Mobile_Phones_yazisina_tiklasin_ve_ilgili_sayfadaki_ilk_urune_ulassin() {
        wait.until(ExpectedConditions.visibilityOf(us011Page.titleMobilePhones));
        us011Page.titleMobilePhones.click();
        wait.until(ExpectedConditions.visibilityOf(us011Page.productPhone));
        Assert.assertTrue(us011Page.productPhone.isDisplayed());
    }

    @Given("tc053 user Phone Bags & Cases yazisina tiklasin ve ilgili sayfadaki ilk urune ulassin")
    public void tc053_user_Phone_Bags_Cases_yazisina_tiklasin_ve_ilgili_sayfadaki_ilk_urune_ulassin() {
        Driver.getDriver().navigate().back();
        us011Page.linkCellphonesTelecommunications.click();
        wait.until(ExpectedConditions.visibilityOf(us011Page.titleMobilePhoneAccessories));
        us011Page.titlePhoneBagsCases.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us011Page.productFittedCase.isDisplayed());
    }

    @Given("tc053 user Mobile Phone Accessories yazisina tiklasin ve sayfadaki ilk urune ulassin")
    public void tc053_user_Mobile_Phone_Accessories_yazisina_tiklasin_ve_sayfadaki_ilk_urune_ulassin() {
        Driver.getDriver().navigate().back();
        us011Page.linkCellphonesTelecommunications.click();
        wait.until(ExpectedConditions.elementToBeClickable(us011Page.titleMobilePhoneAccessories));
        us011Page.titleMobilePhoneAccessories.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us011Page.productMobilePhoneCables.isDisplayed());
    }

    @Given("tc053 user Mobile Phone Parts yazisina tiklasin ve sayfadaki ilk urune ulassin")
    public void tc053_user_Mobile_Phone_Parts_yazisina_tiklasin_ve_sayfadaki_ilk_urune_ulassin() {
        Driver.getDriver().navigate().back();
        us011Page.linkCellphonesTelecommunications.click();
        wait.until(ExpectedConditions.elementToBeClickable(us011Page.titleMobilePhoneParts));
        us011Page.titleMobilePhoneParts.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us011Page.productMobilePhoneLCDs.isDisplayed());
    }

    @Then("tc053 user Power Bank yazisina tiklasin ve sayfadaki ilk urune ulassin")
    public void tc053_user_Power_Bank_yazisina_tiklasin_ve_sayfadaki_ilk_urune_ulassin() {
        Driver.getDriver().navigate().back();
        us011Page.linkCellphonesTelecommunications.click();
        wait.until(ExpectedConditions.elementToBeClickable(us011Page.titlePowerBank));
        us011Page.titlePowerBank.click();
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us011Page.productPowerBank.isDisplayed());
    }

}
