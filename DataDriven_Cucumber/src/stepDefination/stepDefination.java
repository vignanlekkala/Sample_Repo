package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefination {

	WebDriver driver;
	@Given("^open chrome and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Nisum\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.get("https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
		driver.manage().window().maximize();
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_valid_and(String uname, String pwd) throws Throwable {
		driver.findElement(By.xpath("//input[@type='email']")).sendKeys(uname);
	     Thread.sleep(3000);
	     driver.findElement(By.xpath("//*[text()='Next']")).click();
	     Thread.sleep(3000);
	     driver.findElement(By.xpath("//input[@type='password']")).sendKeys(pwd);
	}

	@Then("^User should be loggedin$")
	public void User_should_be_loggedin() throws Throwable {
		driver.findElement(By.xpath("//*[text()='Next']")).click();
	   
	}
	
	@Then("^Application should be closed$")
	public void Application_should_be_closed() throws Throwable 
	{
		driver.close();
	}


	
}
