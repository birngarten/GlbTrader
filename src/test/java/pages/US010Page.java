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


    @FindBy(xpath = "//a[.='Earrings']")
    public WebElement earringsButton;

    @FindBy(xpath = "(//h4[.='Jewelry & Accessories'])[1]")
    public WebElement jeweleryAndAccessories;

    @FindBy(xpath = "//p[.='Jewelry Sets & More']")
    public WebElement jewSetsAndMore;

    @FindBy(xpath = "//p[@class='cat_bg_top']")
    public List<WebElement> imageSetsMore;

    @FindBy(xpath = "//input[@value='‹ Prev']")
    public WebElement prev;

    @FindBy(xpath = "//input[@value='Next ›']")
    public WebElement next;













}



