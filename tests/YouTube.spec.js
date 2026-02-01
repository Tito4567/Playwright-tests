const {test, expect} = require ('@playwright/test');

test('Playing with YouTube', async ({page})=>{

    await page.goto('https://www.youtube.com/post/UgkxGEk7SFTEH1YXlVbtDoex_OAuxdf9fATx');

  //await page.waitForTimeout(10000);
  Tito();
}



);

function Tito()
{
  console.log("Hello world");
}

