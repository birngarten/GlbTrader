package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US001Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US001StepDefinitions {

    US001Page us001Page = new US001Page();
    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);
    Actions action=new Actions(Driver.getDriver());

    @Given("user on sign in")
    public void user_on_sign_in() {
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
        wait.until(ExpectedConditions.elementToBeClickable(us001Page.signInButton)).click();

    }

    @Given("user writes true email")
    public void user_writes_true_email() {
        us001Page.emailTextBox.clear();
        us001Page.emailTextBox.sendKeys("ferhatnacioglu@gmail.com");

    }
    @Given("user writes true password")
    public void user_writes_true_password() {
        us001Page.passwordTextBox.clear();
        us001Page.passwordTextBox.sendKeys("123456789");

    }
    @Then("user clicks login")
    public void user_clicks_login() {
        us001Page.loginSubmit.submit();

    }

    @Given("user on sign in")
    public void user_on_sign_in() {

    }



    @Given("user writes true email")
    public void user_writes_true_email() {

    }
    @Given("user writes false password")
    public void user_writes_false_password() {

    }
    @Then("user clicks login")
    public void user_clicks_login() {

    }


    @Given("user on sign in")
    public void user_on_sign_in() {

    }



    @Given("user writes false email")
    public void user_writes_false_email() {

    }
    @Given("user writes true password")
    public void user_writes_true_password() {

    }
    @Then("user clicks login")
    public void user_clicks_login() {

    }


    @Given("user on sign in")
    public void user_on_sign_in() {

    }



    @Given("user writes false email")
    public void user_writes_false_email() {

    }
    @Given("user writes false password")
    public void user_writes_false_password() {

    }
    @Then("user clicks login")
    public void user_clicks_login() {

    }



    @Given("user on sign in")
    public void user_on_sign_in() {

    }

    @Given("user writes true email")
    public void user_writes_true_email() {

    }

    @Given("user writes true password")
    public void user_writes_true_password() {

    }

    @Then("user clicks login")
    public void user_clicks_login() {

    }

    @Given("user writes false password")
    public void user_writes_false_password() {

    }

    @Given("user writes false email")
    public void user_writes_false_email() {

    }


}
