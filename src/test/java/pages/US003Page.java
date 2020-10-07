package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US003Page {

    public US003Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath ="//*[.=' Seller Join Now']" )
    public WebElement sellerJoinNow;
    @FindBy(xpath = "//*[.='Agent Seller']")
    public  WebElement agentSellerButton;
    @FindBy(id = "vender_name")
    public WebElement nameBox;
    @FindBy(id = "email")
    public WebElement emailBox;
    @FindBy(id = "sub_domain")
    public WebElement sub_domainBox;
    @FindBy(id = "vender_mobile")
    public WebElement mobileBox;
    @FindBy(xpath = "//select[@name='country']")
    public WebElement countryDropBox;
    @FindBy(id = "select_state")
    public WebElement stateBox;
    @FindBy(id = "select_city")
    public WebElement cityBox;
    @FindBy(id = "vender_address")
    public WebElement adressBox;
    @FindBy(id = "zip_code_input")
    public WebElement zipCodePostal;
    @FindBy(xpath = "//select[@name='category']")
    public WebElement categoriesSelectBox;
    @FindBy(id = "password")
    public WebElement passwordBox;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning']")
    public WebElement registrationButton;
    @FindBy(xpath = "//a[@class='btn btn-lg btn-primary']")
    public WebElement loginHereButton;

    @FindBy(id = "username")
    public WebElement loginEmailBox;
    @FindBy(id = "password")
    public WebElement loginPasswordBox;
    @FindBy(id = "submit")
    public WebElement logInButton;

    @FindBy(xpath = "//input[@id='vender_type1']")
    public WebElement companySellerButton;
    @FindBy(id = "company_name")
    public WebElement companyNameBox;
    @FindBy(id = "company_mobile")
    public WebElement companyMobileBox;
    @FindBy(id = "company_address")
    public WebElement companyAdress;
    @FindBy(id = "vender_name")
    public WebElement comNameBox;
    @FindBy(id = "email")
    public WebElement comEmailBox;
    @FindBy(id = "sub_domain")
    public WebElement com_SubDomainBox;
    @FindBy(id = "vender_mobile")
    public WebElement com_Vendor_MobileBox;
    @FindBy(xpath = "//select[@name='country']")
    public WebElement com_Country_Select;
    @FindBy(id = "select_state")
    public WebElement com_State_Box;
    @FindBy(id = "select_city")
    public WebElement com_City_Box;
    @FindBy(id = "vender_address")
    public WebElement com_addres_box;
    @FindBy(id = "zip_code_input")
    public WebElement com_Postal_code_box;
    @FindBy(xpath = "//select[@name='category']")
    public WebElement com_categories_Box;
    @FindBy(id = "password")
    public WebElement com_Password_Box;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning']")
    public WebElement com_Regisration_Button;
    @FindBy(xpath = "//a[@class='btn btn-lg btn-primary']")
    public WebElement com_LoginHere_Button;
    @FindBy(xpath = "(//p[@class='text-center'])[2]")
    public WebElement succesfullyText;






















}
