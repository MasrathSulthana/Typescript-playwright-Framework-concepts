import test from "@playwright/test";

test('Single file upload',async({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
   await page.locator('#single-file').setInputFiles("C:/Users/AdilAhmed/OneDrive/Desktop/urls.txt");
  await page.pause();
    
})

test('Multiple file upload',async({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
   await page.locator('#multi-file').setInputFiles([
    "C:/Users/AdilAhmed/OneDrive/Desktop/urls.txt",
    "C:/Users/AdilAhmed/OneDrive/Desktop/Angular preperations.txt"]);
  await page.pause();
    
})

test('Multiple file upload withfiletype',async({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

   let [fileupload] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()
   ]);

   await fileupload.setFiles("C:/Users/AdilAhmed/OneDrive/Desktop/urls.txt");
 
     await page.pause();
    
})



