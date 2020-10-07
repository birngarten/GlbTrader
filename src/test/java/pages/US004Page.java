package pages;

import io.cucumber.java.bs.A;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US004Page {

    public US004Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//*[.=' Seller Sign in']")
    public WebElement selleSignButton;
    @FindBy(xpath = "//div[@class='avatar']")
    public WebElement avatarPicture;
    @FindBy(id = "username")
    public WebElement userEmailBox;
    @FindBy(id = "password")
    public WebElement userPasswordBox;
    @FindBy(id = "submit")
    public WebElement loginButon;
    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/vendor_forgot.html']")
    public WebElement forgotPassLink;
    @FindBy(xpath = "//h1")
    public WebElement vendorForgotFormText;
    @FindBy(id = "forgot_email")
    public WebElement forgot_email_Box;
    @FindBy(id = "submit")
    public WebElement forgotPasswordSubmit;







}
