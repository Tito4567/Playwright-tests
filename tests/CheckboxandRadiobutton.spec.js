const {test, expect} = require ('@playwright/test');

test('Check box and Radio Button', async ({page})=>{

await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');

await page.getByRole('textbox', { name: /First Name/i }).fill("Gilberto");
await page.getByRole('textbox', { name: /Last Name/i }).fill("Rose");

await page.waitForTimeout(5000);

expect(await page.locator("#passport").isVisible());

 await page.locator("#passport").check();



expect(await page.locator("#passport")).toBeChecked();

await page.waitForTimeout(5000);

})