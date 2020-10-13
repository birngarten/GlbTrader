package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US011Page {
    public US011Page (){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//*[.='Cellphones & Telecommunications'])[2]")
    public WebElement linkCellphonesTelecommunications;

    @FindBy(xpath = "//a[@title='Mobile Phones']")
    public WebElement titleMobilePhones;

    @FindBy(xpath = "//a[@title='Mobile Phone Parts']")
    public WebElement titleMobilePhoneParts;

    @FindBy(xpath = "//a[@title='Mobile Phone Accessories']")
    public WebElement titleMobilePhoneAccessories;

    @FindBy(xpath = "//a[@title='Power Bank']")
    public WebElement titlePowerBank;

    @FindBy(xpath = "//a[@title='Phone Bags & Cases']")
    public WebElement titlePhoneBagsCases;

    @FindBy(xpath = "//img[@class='lazy img-responsive']")
    public WebElement productPhone;

    @FindBy(xpath = "//img[@src='https://www.glbtrader.com/category_images/1501825587.jpeg']")
    public WebElement productFittedCase;

    @FindBy(xpath = "//img[@src='https://www.glbtrader.com/category_images/1501827838.jpeg']")
    public WebElement productMobilePhoneCables;

    @FindBy(xpath = "//img[@src='https://www.glbtrader.com/category_images/1501829154.jpeg']")
    public WebElement productMobilePhoneLCDs;

    @FindBy(xpath = "//img[@src='https://www.glbtrader.com/category_images/1501826595.jpeg']")
    public WebElement productPowerBank;




}
