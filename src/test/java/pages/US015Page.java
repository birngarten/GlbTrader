package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US015Page {

    public US015Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//a[@href='https://www.glbtrader.com/package.html']")
    public WebElement packageLink;

    @FindBy(xpath = "//*[.='Join Now']")
    public WebElement joinNowBaslik;

    @FindBy(xpath = "//table[@class='table table-striped']")
    public WebElement tabloIcindekiler;

    @FindBy(xpath = "//table[@class='table table-striped']/tbody/tr")
    public List<WebElement> tabloSütunBasliklar;

    @FindBy(xpath = "//i[@class='fa fa-check']")
    public WebElement okeyIsaret;

    @FindBy(xpath = "//thead")
    public WebElement packageBirinciSütun;

    @FindBy(xpath = "//th")
    public WebElement packageBox;

    @FindBy(xpath = "(//th)[2]")
    public WebElement bronzBox;

    @FindBy(xpath = "(//th)[3]")
    public WebElement silverBox;

    @FindBy(xpath = "(//th)[3]")
    public WebElement goldBox;

    @FindBy(xpath = "(//th)[4]")
    public WebElement platiniumBox;



}


