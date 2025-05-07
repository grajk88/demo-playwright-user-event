import { test, expect } from '@playwright/test';

test('Registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('Test');
  await page.locator('[id="customer\\.firstName"]').press('Tab');
  await page.locator('[id="customer\\.lastName"]').fill('Test');
  await page.locator('[id="customer\\.lastName"]').press('Tab');
  await page.locator('[id="customer\\.address\\.street"]').fill('Test');
  await page.locator('[id="customer\\.address\\.street"]').press('Tab');
  await page.locator('[id="customer\\.address\\.city"]').fill('Test');
  await page.locator('[id="customer\\.address\\.city"]').press('Tab');
  await page.locator('[id="customer\\.address\\.state"]').fill('Test');
  await page.locator('[id="customer\\.address\\.state"]').press('Tab');
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('Test');
  await page.locator('[id="customer\\.address\\.zipCode"]').press('Tab');
  await page.locator('[id="customer\\.phoneNumber"]').fill('Test');
  await page.locator('[id="customer\\.phoneNumber"]').press('Tab');
  await page.locator('[id="customer\\.ssn"]').fill('Test');
  await page.locator('[id="customer\\.ssn"]').press('Tab');
  await page.locator('[id="customer\\.username"]').fill('Test1237');
  await page.locator('[id="customer\\.password"]').click();
  await page.locator('[id="customer\\.password"]').fill('test');
  await page.locator('[id="customer\\.password"]').press('Tab');
  await page.locator('#repeatedPassword').fill('test');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.locator('#rightPanel')).toContainText('Your account was created successfully. You are now logged in.');
});