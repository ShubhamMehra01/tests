const {test, expect} = require ("@playwright/test");

test("GetByRoleGetByText", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.waitForLoadState("networkidle");
//await page.getByRole("Input",{name: "name"}).("centric");
//await page.getByLabel("Email").fill("test@gmail.com");
await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel("Gender").selectOption("Male");
await page.getByLabel("Employed").check();
await page.getByPlaceholder("Password").fill("Test@12345");
//await page.getByLabel("Date of Birth").fill
await page.getByRole("button", {name: 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link",{name: "Shop"}).click();
await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");
await page.waitForLoadState("networkidle"); 
const Prodname = page.locator(".card-body");
// await page.waitForLoadState("networkidle"); 
const Product="Samsung Note 8";
const AllProduct= await page.locator(".card-body .card-title").allTextContents();
const Total=await Prodname.count();
console.log(AllProduct);
console.log(Total);
for(let i=0; i<Total; ++i){ 
const prodtext= page.locator(".card-title").nth(i);
await prodtext.waitFor();
const producttext =await prodtext.textContent();
if(producttext.includes(Product)){
     await page.locator(".card-footer .btn ").nth(i).click();
}
}
      console.log(Product);
      await page.locator(".nav-link.btn").click();
 });