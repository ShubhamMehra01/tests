const {test, expect} = require ("@playwright/test");
const { Console } = require("node:console");
test ('Product purchase', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");//opening site
//Login
await page.locator("#userEmail").fill("test@gmail.com"); 
await page.locator("#userPassword").fill("work@12345");
await page.locator("#login").click(); 
//product select
const product = page.locator('.card-body');
await page.waitForLoadState("networkidle");
const nameprod = "ADIDAS ORIGINAL";
const title = await page.locator(".card-body b").allTextContents();
console.log(title);
const prodcount = await product.count();
console.log(prodcount);
for(let i=0; i<=prodcount; i++){
    if(await product.nth(i).locator('b').textContent()==nameprod){
        await product.nth(i).locator("text=Add To Cart").click();
        break;
    }
    }
//cart page
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool= await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(bool).toBeTruthy();
//checkout
await page.locator("text=Checkout").click();
await page.getByPlaceholder('Select Country').pressSequentially("ind",{delay:150});
await page.waitForSelector('.ta-results', {state: "visible", timeout : 10000});
const Down = await page.locator('.ta-item').allTextContents();
console.log(Down);
const countitem = await page.locator('.ta-item').count();
console.log(countitem);
for(let i=0; i<=countitem; ++i){
const item = await page.locator('.ta-item .ng-star-inserted').nth(i).textContent();
console.log(item);
   if(await page.locator('.ta-item .ng-star-inserted').nth(i).textContent() === " India"){
     await page.locator('.ta-item .ng-star-inserted').nth(i).click();
     break;
  }
}
const email= "test@gmail.com";
await expect(page.locator("label[type='text']").first()).toHaveText(email);
console.log(email);
const placeOrder=page.locator(".user__name .btnn");
await page.waitForSelector(".user__name .btnn",{state: "visible", timeout: 10000});
await placeOrder.click(); 
//order details
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);
await page.locator('button[routerlink*="/myorders"]').click();
const Totalorders = page.locator("tbody tr th");
await page.waitForSelector("tbody tr th",{state: "visible",timeout:10000});
const orderidtext = await Totalorders.allTextContents();
console.log(orderidtext);
//total orders and placed order id matched
const totalorders1=await Totalorders.count();
console.log(totalorders1);
for (let i = 0; i<=totalorders1; ++i) {
const orderdetails = await page.locator("tbody tr th").nth(i).textContent();
console.log(orderdetails);
if (orderid.includes(orderdetails)){
    await page.locator(".btn.btn-primary").nth(i).click();
    break;
}
}
const orderdetails = await page.locator(".col-text").textContent();
expect(orderid.includes(orderdetails)).toBeTruthy(); 
});