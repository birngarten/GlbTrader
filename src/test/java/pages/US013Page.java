package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;
import java.util.Set;

public class US013Page {
    public US013Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//div[@class='col-md-6 col-xs-12 small-img-set']")
    public List<WebElement> TodaysDeals;
    @FindBy(xpath = "//a[@class='ret']")
    public WebElement viewMoreLink;
    @FindBy(xpath = "//*[.=' Min. Price']")
    public WebElement minPriceLink;
    @FindBy(xpath = "//del[@class='font10']")
    public List<WebElement> prices;
    @FindBy(xpath = "//*[.=' Max. Price']")
    public WebElement maxPriceLink;
    @FindBy(xpath = "//input[@value='M']")
    public WebElement mSize;
    @FindBy(xpath = "//div[@class='caption']")
    public List<WebElement> searchResult;
    @FindBy(xpath = "//*[.=' Free Shipping']")
    public WebElement freeShippingLink;
    @FindBy(xpath = "//img[@class='img-responsive text-center_xs']")
    public WebElement homeLink;


}
