package com.Inc.Project1.BE.selenium;
 
import static org.mockito.ArgumentMatchers.contains;

import java.time.Duration;
 
import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;

import org.junit.jupiter.api.Order;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.TestMethodOrder;

import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.remote.RemoteWebDriver;

import org.openqa.selenium.support.ui.WebDriverWait;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import org.springframework.boot.test.web.server.LocalServerPort;

import org.springframework.test.context.jdbc.Sql;

import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
 
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)

@TestMethodOrder(OrderAnnotation.class)

@Sql(scripts = { "classpath:shop-schema.sql",

		"classpath:shop-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
 
public class IncP1Testing {
 
	private RemoteWebDriver driver;

	private WebDriverWait wait;
 
	@LocalServerPort

	private int port;
 
	@BeforeEach

	void init() {

		this.driver = new ChromeDriver();

		this.driver.manage().window().maximize();

		this.driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

		this.wait = new WebDriverWait(driver, Duration.ofSeconds(3));

	}
 
	@Test

	@Order(1)
 
	void testLogin() throws InterruptedException {

		this.driver.get("http://localhost:" + this.port);
 
		WebElement clickUsername = this.driver

				.findElement(By.cssSelector("#root > div > div > div > form > label:nth-child(1) > input[type=text]"));

		clickUsername.click();
 
		WebElement typeUsername = this.driver

				.findElement(By.cssSelector("#root > div > div > div > form > label:nth-child(1) > input[type=text]"));

		typeUsername.sendKeys("Patryk");
 
		WebElement clickPassword = this.driver

				.findElement(By.cssSelector("#root > div > div > div > form > label:nth-child(3) > input[type=password]"));

		clickPassword.click();
 
		WebElement typePassword = this.driver

				.findElement(By.cssSelector("#root > div > div > div > form > label:nth-child(3) > input[type=password]"));

		typePassword.sendKeys("password");
 
		WebElement clickSignIn = this.driver.findElement(By.cssSelector("#root > div > div > div > form > div > button"));

		clickSignIn.click();
 
		WebElement confirmSignIn = this.driver.findElement(By.cssSelector("#root > div > div > div > h1"));

		Assertions.assertEquals(true, confirmSignIn.getText().contains("Aldi"));

	}
 
	@Test

	@Order(2)

	void testItems() throws InterruptedException {

		this.driver.get("http://localhost:" + this.port);
 
		WebElement navAddItems = this.driver

				.findElement(By.cssSelector("#navbarNavAltMarkup > div > ul > li:nth-child(4) > a"));

		navAddItems.click();
 
		WebElement ClickName = this.driver.findElement(By.cssSelector("#name"));

		ClickName.click();
 
		WebElement typeName = this.driver.findElement(By.cssSelector("#name"));

		typeName.sendKeys("Milk");
 
		WebElement ClickPrice = this.driver.findElement(By.cssSelector("#price"));

		ClickPrice.click();
 
		WebElement typePrice = this.driver.findElement(By.cssSelector("#price"));

		typePrice.sendKeys("1.89");
 
		WebElement typeImage = this.driver.findElement(By.cssSelector("#image"));

		typeImage.sendKeys("https://cdn.dribbble.com/users/387221/screenshots/6584182/free-milk-carton-box-packaging-mockup-psd_4x.jpg");
		
		WebElement ClickSubmit = this.driver.findElement(By.cssSelector("#SubmitCreateItem"));

		ClickSubmit.click();
 
		Thread.sleep(5000);
 
	}
 
}
