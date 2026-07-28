import test, { expect } from "@playwright/test";
import * as fs from 'fs';

test('File Download',async({page})=>{

   await page.goto('https://the-internet.herokuapp.com/download');
   let [fileDownload]=await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link',{name:'test_upload.txt'}).click()
   ]);


   //get the file name
   console.log('file name:',fileDownload.suggestedFilename());

 // save in specific path

 let filepath = './download/'+fileDownload.suggestedFilename();


 expect(fs.existsSync(filepath)).toBeTruthy();

   

    
})


test('File Download1', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'test_upload.txt' }).click()
  ]);

  const downloadDir = './download';

  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  const filePath = `${downloadDir}/${download.suggestedFilename()}`;

  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
});