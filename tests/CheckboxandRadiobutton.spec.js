const {test, expect} = require ('@playwright/test');


test('Check box and Radio Button', async ({page})=>{

await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');


await page.locator('#prefix').selectOption("Mr.");
await page.getByRole('textbox', { name: /First Name/i }).fill("Gilberto");
await page.getByRole('textbox', { name: /Last Name/i }).fill("Rose");
await page.locator('[name="fathername"]').fill("Gilberto R. Rose Sr");
await page.locator('[name="mothername"]').fill("Nelva C. Rose Sr");
await page.locator("#identity_number").fill("123456");

expect (await page.getByLabel('Saving').isVisible());
console.log(await page.getByLabel('Saving').isChecked()+" "+"is value");
await page.getByLabel('Pension').click();
expect (await page.getByLabel('Saving').isChecked());

//await page.waitForTimeout(10000);

expect(await page.locator("#passport").isVisible());
expect(await page.locator('#studentid').isVisible());
expect(await page.locator('#votercard').isVisible());
expect(await page.locator('#drivinglicense').isVisible());



 await page.locator("#passport").check();



expect(await page.locator("#passport")).toBeChecked();

await page.waitForTimeout(10000);

});