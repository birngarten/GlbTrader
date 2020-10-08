package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US005Page {

    public US005Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//a[@title='About Us'])[1]")
    public WebElement aboutUsLink;

    @FindBy(xpath = "//h4")
    public WebElement aboutUsHeader;

    @FindBy(xpath = "(//strong)[2]")
    public WebElement telefonText;

    @FindBy(xpath = "//div[@class='col-xs-12 col-sm-12 margin col-md-12 wide sidebar']")
    public WebElement metinText;



}
