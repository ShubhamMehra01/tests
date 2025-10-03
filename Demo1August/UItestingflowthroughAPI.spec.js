import {test, expect,request} from '@playwright/test';
//import { constants } from 'buffer';
// //const { type } = require('os');
const loginpayload = {userEmail: "test1@gmail.com", userPassword: "Work@12345"};
const orederPayload = {orders:[{country:"India",productOrderedId:"68a961719320a140fe1ca57c"}]};
let token;
let orderresponse;

test.beforeAll(async()=>{
    const Acontext = await request.newContext();
    const loginresponse = await Acontext.post(('https://rahulshettyacademy.com/client/'),
    {
      data : loginpayload
    })
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    token = loginresponseJson.token;
    console.log(token)});
    
    test ('order', async({browser})=>{
      const context = await browser.newContext();
      const page = await context.newPage();

    });
    await Acontext.post(('https://rahulshettyacademy.com/api/ecom/order/create-order'),
    {
      
      data : orederPayload,
      Headers: {
        'Authorization': token,
        'content-type' : 'aplication/json'

      } 
    })
    const orderresponseJson= await orderresponse.json();
    console.log(orderresponseJson);
    orderid = orderresponseJson.orders[0]; 

    const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  

  
  test('placed product', async({page})=>{
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
}});
// const orderdetails = await page.locator(".col-text").textContent();
// expect(orderid.includes(orderdetails)).toBeTruthy();
// });