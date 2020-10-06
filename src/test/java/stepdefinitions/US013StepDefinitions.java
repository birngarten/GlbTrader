package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.US013Page;

public class US013StepDefinitions {

    US013Page us013Page = new US013Page();

    @Given("user clicks todays deal page")
    public void user_clicks_todays_deal_page() {

    }

    @Then("user asserts there are four parcels in page")
    public void user_asserts_there_are_parcels_in_page(Integer int1) {

    }

    @Then("user clicks view more link")
    public void user_clicks_view_more_link() {

    }

    @Then("user veryfies the website")
    public void user_veryfies_the_website() {

    }

    @Then("user clicks min price link")
    public void user_clicks_min_price_link() {

    }

    @Then("user veryfies parcels are listed from min price to max price")
    public void user_veryfies_parcels_are_listed_from_min_price_to_max_price() {

    }

    @Then("user clicks max price link")
    public void user_clicks_max_price_link() {

    }

    @Then("user veryfies parcels are listed from max price to min price")
    public void user_veryfies_parcels_are_listed_from_max_price_to_min_price() {
;
    }

    @Then("user clicks left side M size")
    public void user_clicks_left_side_M_size() {

    }

    @Then("user veryfies at least one parcel are listed")
    public void user_veryfies_at_least_one_parcel_are_listed() {

    }

    @Then("user clicks free shippping link")
    public void user_clicks_free_shippping_link() {

    }

    @Then("user veryfies minimum {int} parcels are listed")
    public void user_veryfies_minimum_parcels_are_listed(Integer int1) {

    }

    @Then("user clicks home button")
    public void user_clicks_home_button() {

    }

    @Then("user verifies home page")
    public void user_verifies_home_page() {

    }

}
