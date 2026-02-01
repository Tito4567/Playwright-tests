const {test, expect} = require('@playwright/test');

test('Playing with YouTube', async ({page}) => {
    await page.goto('https://www.youtube.com/post/UgkxGEk7SFTEH1YXlVbtDoex_OAuxdf9fATx');

    // Call the function

    //await page.waitForTimeout(5000);
    Tito();
}); // Properly closing the test block

// Define the function outside
function Tito() {
    console.log("Hello world");
}