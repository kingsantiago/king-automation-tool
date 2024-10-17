import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from '@playwright/test';

let page: Page;
let browser: Browser;

Given('the user is on the login page as {string}', async function (type: string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  //loginPage = new LoginPage(this.page); // Accessing Playwright's page context
  await page.goto('https://practicetestautomation.com/practice-test-login');
  //await loginPage.navigate();
});


When('the user enters username as {string}', async function (username) {
  await page.locator('xpath=//*[@id="username"]').fill(username);
  //await loginPage.enterUsername(string);
});

Given('the user enters password as {string}', async function (password) {
  await page.locator('xpath=//*[@id="password"]').fill(password);
});

When('the user clicks on the submit button', async function () {
  await page.locator('xpath=//*[@id="submit"]').click();
});

Then('the user should be redirected to the logged-in page', async function () {
  await page.getByText('Congratulations student. You').click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('article')).toContainText('Log out');
  await browser.close();
});

Then('the user should see the error message', async function () {
  
  if (await page.locator('#error').isVisible()) {
    const errorText = await page.locator('#error').textContent();

    if (errorText?.includes('Your username is invalid!')) {
        await expect(page.locator('#error')).toContainText('Your username is invalid!');
    } else
      if (errorText?.includes('Your password is invalid!')) {
        await expect(page.locator('#error')).toContainText('Your password is invalid!');
    }
} else {
    throw new Error('Error message not visible');
}
  await browser.close();
});