const { test, expect } = require('@playwright/test');

test('inputandradio', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');

  
    //await page.getByRole('textbox').check();
    await page.check('button');
  await page.getByRole('textbox').fill("Hello World");
  await page.getByRole('button').click();
  
  //await page.getByRole('button')
  
  await page.waitForTimeout(5000);
  

  page.close();
});