package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US002Page {
    public US002Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//*[.='Join Now']")
    public WebElement joinNow;

    @FindBy(xpath = "//h3[@class='form-signin-heading']")
    public WebElement headerSignIn;

    @FindBy(id = "email")
    public WebElement emailText;

    @FindBy(id = "name")
    public WebElement nameText;

    @FindBy(id = "mobile")
    public WebElement mobileText;

    @FindBy(id = "password")
    public WebElement passwordText;

    @FindBy(id = "re_password")
    public WebElement rePasswordText;

    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning btn-block']")
    public WebElement buttonSignIn;

    @FindBy(xpath = "//div[@class='alert alert-success']")
    public WebElement alertSuccess;

    @FindBy(xpath = "//div[@class='col-md-12 col-xs-12']")
    public WebElement buttonLoginHere;

    @FindBy(id = "alert_email_address")
    public WebElement alertWrongEmail;

    @FindBy(id = "alert_password")
    public WebElement alertPassword;

    @FindBy(xpath = "//h3[@class='form-signin-heading']")
    public WebElement headerWelcomeBack;

    @FindBy(id = "email")
    public WebElement customerEmail;

    @FindBy(id = "password")
    public WebElement customerPassword;

    @FindBy(xpath = "//a[@class='btn btn-sm btn-success btn-block']")
    public WebElement buttonForgotPassword;

    @FindBy(xpath = "//*[.='Forgot Form']")
    public WebElement headerForgotForm;

    @FindBy(id = "forgot_email")
    public WebElement textBoxEmail;

    @FindBy(xpath = "//button[@class='btn btn-danger ']")
    public WebElement redButtonForgotPassword;

    @FindBy(id = "alert_forgot_email")
    public WebElement alertSorryNotExist;

}
