package stepdefinitions;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.Color;
import pages.US006Page;
import utilities.Driver;
import utilities.ReusableMethods;

import java.awt.*;

public class US006StepDefinitions {
    US006Page us006Page = new US006Page();
    @Before
    public void setUp(){
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
    }

    @Given("user asserts searchBox text")
    public void user_asserts_searchBox_text() {
        Assert.assertEquals(us006Page.pageSearchBox.getAttribute("placeholder"),"I'm Shopping for...");

    }

    @Then("user asserts searchbutton color")
    public void user_asserts_searchbutton_text() {
        String color = Color.fromString(us006Page.searchButton.getCssValue("background-color")).asHex();
        Assert.assertEquals(color,"#e62e04");
    }

    @Given("user asserts in text box data can be sent")
    public void user_asserts_in_text_box_data_can_be_sent() {
        us006Page.pageSearchBox.sendKeys("men");
        us006Page.searchButton.click();
        Assert.assertTrue(us006Page.searchResults.size()>0);
    }

    @Given("user send data to seachBox")
    public void user_send_data_to_seachBox() {
        us006Page.pageSearchBox.sendKeys("ipad");
    }

    @Then("user clicks search Button")
    public void user_clicks_search_Button() {
        us006Page.searchButton.click();
    }

    @Then("user verifiy the data with results")
    public void user_verifiy_the_data_with_results() {
        System.out.println(us006Page.searchResult.getText());
        Assert.assertEquals(us006Page.searchResult.getText(),"Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Displaysdafas");
    }

    @Given("user clicks Alle Categories Cellphones & Telecommunications")
    public void user_clicks_Alle_Categories_Cellphones_Telecommunications() {
        us006Page.seeAllLink.click();
        us006Page.computerAndOfficeLink.click();
        us006Page.tabletsLink.click();
        us006Page.ipadLink.click();
    }

    @Given("user finds ipad")
    public void user_finds_ipad() {
        Assert.assertEquals(us006Page.searchResult.getText(),"Apple iPad Pro (256GB, Wi-Fi + Cellular, Space Gray) 12.9-inch Displaysdafas");

    }
}
