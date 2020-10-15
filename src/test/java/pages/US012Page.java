package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US012Page {
    public US012Page()
    {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//span[.='Computer & Office']")
    public WebElement linkComputerMenu;

    @FindBy(xpath ="(//*[.='Tablets'])[2]" )
    public WebElement linkTablets;


    @FindBy(xpath = "(//div[@class='border-img'])[4]")
    public WebElement linkIpad;

    @FindBy(xpath = "//div[@class='img-box']")
    public WebElement ipadProLink;

    @FindBy(xpath = "//button[@id='cart']")
    public WebElement buyNow;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning btn-block']")
    public  WebElement loginButton;
    @FindBy(xpath = "(//div[@class='col-md-4'])[2]")
    public WebElement addToWish;
    @FindBy(xpath = "//span[@id='alert_messages_show']")
    public WebElement publicMessages;
    @FindBy(xpath = "//a[@href ='#feedback_form']")
    public WebElement feedbackLink;
    @FindBy(xpath = "//input[@id ='usr']")
    public WebElement yourName;
    @FindBy(xpath = "//textarea[@id ='comment']")
    public WebElement commentText;
    @FindBy(xpath = "//textarea[@id ='comment']")
    public WebElement leaveARivew;
    @FindBy(xpath = "//a[@href ='http://apple123.glbtrader.com/seller.php?page=seller_information&action=seller_contact&vender_id=19&prod_id=1131']")
    public WebElement contactNowLinki;
    @FindBy(xpath = "//input[@id ='name']")
    public WebElement enterName;
    @FindBy(xpath = "//input[@id ='email']")
    public WebElement enterEmail;
    @FindBy(xpath = "//input[@id ='mobile']")
    public WebElement enterMobile;
    @FindBy(xpath = "//textarea[@id ='message']")
    public WebElement enterMessage;
    @FindBy(xpath = "//input[@id ='contact_submit']")
    public WebElement sendButonu;
    @FindBy(xpath = "//span[@id='alert_messages_show']")
    public WebElement alertFeedbackMessage;
    @FindBy(xpath ="//input[@id='review_submit']")
    public WebElement leaveARivew1;














}

