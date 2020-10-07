package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.US013Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US013StepDefinitions {

    US013Page us013Page = new US013Page();
    Actions actions = new Actions(Driver.getDriver());

    @Then("user asserts there are four parcels in page")
    public void user_asserts_there_are_parcels_in_page() {
        Assert.assertEquals(4, us013Page.TodaysDeals.size());
    }

    @Then("user clicks view more link")
    public void user_clicks_view_more_link() {
        us013Page.viewMoreLink.click();
    }

    @Then("user veryfies the website")
    public void user_veryfies_the_website() {
        Assert.assertEquals("https://www.glbtrader.com/deal.html",
                Driver.getDriver().getCurrentUrl());
    }

    @Then("user clicks min price link")
    public void user_clicks_min_price_link() {
        us013Page.minPriceLink.click();
    }

    @Then("user veryfies parcels are listed from min price to max price")
    public void user_veryfies_parcels_are_listed_from_min_price_to_max_price() {
        for (int i=0; i<us013Page.prices.size()-2;i++){
            //Integer.parseInt(us013Page.prices.get(i).getText())
            Assert.assertTrue(Integer.parseInt(us013Page.prices.get(i).getText())<=Integer.parseInt(us013Page.prices.get(i+1).getText()));
        }
    }

    @Then("user clicks max price link")
    public void user_clicks_max_price_link() {
        us013Page.maxPriceLink.click();
    }

    @Then("user veryfies parcels are listed from max price to min price")
    public void user_veryfies_parcels_are_listed_from_max_price_to_min_price() {
;               for (int i=0; i<us013Page.prices.size()-2;i++){
            //Integer.parseInt(us013Page.prices.get(i).getText())
            Assert.assertTrue(Integer.parseInt(us013Page.prices.get(i).getText())>=Integer.parseInt(us013Page.prices.get(i+1).getText()));
        }
    }

    @Then("user clicks left side M size")
    public void user_clicks_left_side_M_size() {
        us013Page.mSize.click();
        actions.sendKeys(Keys.ENTER).perform();
        ReusableMethods.waitFor(1);
    }

    @Then("user veryfies at least one parcel are listed")
    public void user_veryfies_at_least_one_parcel_are_listed() {
        System.out.println(us013Page.searchResult.size());
        Assert.assertTrue(us013Page.searchResult.size()>0);
    }

    @Then("user clicks free shippping link")
    public void user_clicks_free_shippping_link() {
        us013Page.freeShippingLink.click();
    }

    @Then("user veryfies minimum nine parcels are listed")
    public void user_veryfies_minimum_parcels_are_listed() {
        Assert.assertTrue(us013Page.searchResult.size()==9);
    }

    @Then("user clicks home button")
    public void user_clicks_home_button() {
        us013Page.homeLink.click();
    }

    @Then("user verifies home page")
    public void user_verifies_home_page() {
        Assert.assertEquals(Driver.getDriver().getCurrentUrl(),"https://www.glbtrader.com/index.html");
    }

}
