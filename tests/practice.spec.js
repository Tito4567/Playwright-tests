const {test, expect} = require ('@playwright/test');
test('practice run', async ({page})=>{
//  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

//     const pageTitle=await page.title();
//     console.log(pageTitle);
//     console.log('Testing 123');

//     await expect(page).toHaveTitle('The Internet');
//     await page.locator('id=f96c0710-d5e6-013e-34e8-7631d2b4ed56').click();
//     page.close();

// ----------------------------------------------------------------------------------------


await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

const pageTitle=await page.title();
await expect(page).toHaveTitle('The Internet');

 let i = 0;
 while (i < 10)
    { 
        await page.getByText('Add Element').click();
    i++;
    }

   

  const number = await page.getByText('Delete').count();
  //const numberTwo = 12;
  await expect(number).toBe(i);

  page.close();

})