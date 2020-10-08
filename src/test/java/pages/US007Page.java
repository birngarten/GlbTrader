package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US007Page {

    public US007Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//option")
    public List<WebElement> allCategories;

    @FindBy(id = "header_search_category")
    public WebElement allCategoriesDropdown;

    @FindBy(xpath = "//button[@class='btn btn-warning']")
    public WebElement submitAllCategoriesButon;

    @FindBy(xpath = "//input[@id='typeahead']")
    public WebElement searchBox;

    @FindBy(xpath = "//h4")
    public WebElement appleIpad;

    @FindBy(xpath = "//div[@class='col-md-2 logo']")
    public WebElement glbTraderLogo;



}
