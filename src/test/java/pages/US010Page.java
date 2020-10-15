package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US010Page {
    public US010Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//li[@class='dropdown ttmenu-full']")
    public List<WebElement> dropdownSekme;

    @FindBy(xpath = "(//ul//li//h4)[32]")
    public WebElement earrings;

    @FindBy(xpath = "(//ul)[36]//li//h4")
    public WebElement earringsButton;

    @FindBy(xpath = "//p[@class='cat_bg_top']")
    public List<WebElement> imageSetsMore;

    @FindBy(xpath = "//input[@value='‹ Prev']")
    public WebElement prev;

    @FindBy(xpath = "//input[@value='Next ›']")
    public WebElement next;











}
