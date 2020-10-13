package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US006Page {
    public US006Page (){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(id = "typeahead")
    public WebElement pageSearchBox;
    @FindBy(xpath = "//button[@class='btn btn-warning']")
    public WebElement searchButton;
    @FindBy(xpath = "//div[@class='col-sm-6 col-md-3 col-xs-6 fix_height_both']")
    public List<WebElement> searchResults;
    @FindBy(xpath = "//h4[@class='icon-hotproduct']")
    public WebElement searchResult;
    @FindBy(xpath = "//span[@class='text-muted']")
    public WebElement seeAllLink;
    @FindBy(xpath = "//span[.='Computer & Office']")
    public WebElement computerAndOfficeLink;
    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/Computer-Office-Tablets/41/48']")
    public WebElement tabletsLink;
    @FindBy(xpath = "(//p[@class='cat_bg_top'])[4]")
    public WebElement ipadLink;
}
