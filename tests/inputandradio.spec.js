const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  

  page.close();
});