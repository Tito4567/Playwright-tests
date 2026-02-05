// @ts-check
import { test, expect } from '@playwright/test';

test('Google', async ({ page }) => {
  await page.goto('https://Google.com');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  //await page.getByRole('textarea').fill('hello world');

  //await page.getByTestId('hplogo').click();

//   await page.getByTitle('Search').fill('hello world');
  
//   await page.getByRole('button', { name: 'Google Search' }).click();

    await page.getByText('Store').click();




  

  //textarea

  await page.waitForTimeout(60000);



});

