package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US014Page {
    public US014Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//a[@class='goog-te-menu-value']")
    public WebElement selectLanguegeBox;

    @FindBy (xpath = "//iframe[@class='goog-te-menu-frame skiptranslate']")
    public WebElement iframeLanguage;

    @FindBy (xpath = "//div[@id=':1.menuBody']")
    public  WebElement menuBodyDil;

    @FindBy(xpath = "(//span[@class='icon_widh'])[1]")
    public WebElement sayfadaBirYer;

    @FindBy(xpath = "(//span[@class='icon_widh'])[1]")
    public WebElement sayfadaAlmancaText;

    @FindBy(xpath = "//span[.='German']")
    public WebElement deutschLanguage;

    @FindBy(xpath = "//a[@class='goog-te-menu2-item']")
    public WebElement tümDiller;

    @FindBy(xpath = "//div[@style='white-space: nowrap;']")
    public List<WebElement> backGroundFarbe;

    @FindBy(xpath = "(//span[@class='icon_widh'])[1]")
    public WebElement getGermanText;

    @FindBy(xpath = "//a[@class='goog-te-menu2-item']/div/span[2]")
    public List <WebElement> getDilText;
    @FindBy(xpath = "//span[.='English']")
    public WebElement englishLanguage;
    @FindBy(xpath = "(//span[@class='icon_widh'])[1]")
    public WebElement getEnglishText;



}
