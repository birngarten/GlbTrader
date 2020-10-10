package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US001Page {
    public US001Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[@class='media-body sing_in']")
    public WebElement signInButton;


    @FindBy(xpath = "//input[@id='email']")
    public WebElement emailTextBox;
    @FindBy(xpath = "//input[@id='password']")
    public WebElement passwordTextBox;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning btn-block']")
    public WebElement loginSubmit;
}