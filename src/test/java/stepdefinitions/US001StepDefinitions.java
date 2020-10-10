package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.US001Page;
import utilities.Driver;
import utilities.ReusableMethods;

public class US001StepDefinitions {

    US001Page us001Page = new US001Page();
    ReusableMethods reuse;
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),30);




    @Given("user writes true email and true password")
    public void user_writes_true_email_and_true_password() {
        Driver.getDriver().get("https://www.glbtrader.com/index.html");
        us001Page.signInButton.click();
        us001Page.emailTextBox.clear();
        us001Page.emailTextBox.sendKeys("ferhatnacioglu@gmail.com");
        us001Page.passwordTextBox.clear();
        us001Page.passwordTextBox.sendKeys("123456789");
        us001Page.loginSubmit.click();
        Assert.assertTrue(us001Page.MyAccountTitle.isDisplayed());
        us001Page.MyAccountSignOut.click();
        ReusableMethods.waitFor(1);

    }
    @Given("user writes false email and true password")
    public void user_writes_false_email_and_true_password() {

        us001Page.signInButton.click();
        us001Page.emailTextBox.clear();
        us001Page.emailTextBox.sendKeys("fakemail@gmail.com");
        us001Page.passwordTextBox.clear();
        us001Page.passwordTextBox.sendKeys("123456789");
        us001Page.loginSubmit.click();
        Assert.assertTrue(us001Page.undefinedLogin.isDisplayed());
        ReusableMethods.waitFor(1);

    }
    @Given("user writes true email and false password")
    public void user_writes_true_email_and_false_password() {

        us001Page.emailTextBox.clear();
        us001Page.emailTextBox.sendKeys("ferhatnacioglu@gmail.com");
        us001Page.passwordTextBox.clear();
        us001Page.passwordTextBox.sendKeys("fakepassword");
        us001Page.loginSubmit.click();
        Assert.assertTrue(us001Page.undefinedLogin.isDisplayed());
        ReusableMethods.waitFor(1);

    }
    @Then("user writes false email and false password")
    public void user_writes_false_email_and_false_password() {

        us001Page.emailTextBox.clear();
        us001Page.emailTextBox.sendKeys("fakemail@gmail.com");
        us001Page.passwordTextBox.clear();
        us001Page.passwordTextBox.sendKeys("fakepassword");
        us001Page.loginSubmit.click();
        Assert.assertTrue(us001Page.undefinedLogin.isDisplayed());


    }






}
