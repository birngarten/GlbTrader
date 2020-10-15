package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US009Page {
    public US009Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//span[.='Women Clothing & Accessories']")
    public WebElement womenClothingLink;

    @FindBy(xpath = "//a[.='Tassels Dresses']")
    public WebElement tasselLink;

    @FindBy(xpath = "//h4[@class='icon-hotproduct']")
    public  WebElement ilkUrun;

    @FindBy(xpath = "//h4[@class='pro_new_head']")
    public WebElement urunName;

    @FindBy(xpath = "/html/body/div[1]/div[4]/div/div/div[2]/div[3]/div[3]/div[2]/a/img")
    public List<WebElement> renkler;

    @FindBy(xpath = "/html/body/div[1]/div[4]/div/div/div[2]/div[3]/div[1]/div[2]/div/a")
    public List<WebElement> bedenler;

    @FindBy(xpath = "//span[@class='maincolor font24 bold fix-md-set']")
    public WebElement fiyat;

    @FindBy(id = "typeahead")
    public WebElement searchBox;

    @FindBy(xpath = "//img[@src='https://www.glbtrader.com/product_images/120X120/1188537798.jpg']")
    public WebElement result;








}
