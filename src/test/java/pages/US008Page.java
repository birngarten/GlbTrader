package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utilities.Driver;

import java.util.List;

public class US008Page {
    public US008Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "header_search_category")
    public WebElement searchBox;

    @FindBy(xpath = "//span[.='See All >>']")
    public WebElement seeAllLink;

    @FindBy(xpath = "//a[@title='Jeans']")
    public WebElement jeansLink;

    @FindBy(xpath = "//div[.=' Record Not Found.. ']")
    public WebElement jeansResult;

    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/MenClothing-Accessories-/1']")
    public WebElement menClothingLink;

    @FindBy(xpath = "//div[@class='col-lg-3 col-xs-6 col-sm-4']")
    public List<WebElement> menClothingUrunList;

    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/Men-Clothing-Accessories-Sunglasses/1/12/378']")
    public WebElement sunglassesLink;

    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/Men-Clothing-Accessories-Jackets-Coats/1/8']")
    public WebElement jacketsLink;

    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/Men-Clothing-Accessories-Jackets-Coats-Blazers/1/8/330']")
    public WebElement blazerLink;

    @FindBy(id = "usr")
    public WebElement PriceFilter;

    @FindBy(id = "select_brand_id")
    public WebElement brandCheck;

    @FindBy(xpath = "//input[@value='L']")
    public WebElement sizeL;

    @FindBy(xpath = "//input[@value='Regular']")
    public WebElement regularLenght;

    @FindBy(xpath = "//input[@value='Hooded']")
    public WebElement hooded;

    @FindBy(xpath = "//input[@value='Full']")
    public WebElement lenghtFull;

    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/listing/Men-Clothing-Accessories-Boots/1/585/587']")
    public WebElement bootsLink;

    @FindBy(xpath = "//input[@value=' 9.5']")
    public WebElement bootnumber;
}
