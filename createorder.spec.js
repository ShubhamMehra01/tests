const { test, expect, request } =require ('@playwright/test');
const { waitForDebugger } = require('inspector');
const loginpayload = {userEmail: "test1@gmail.com", userPassword: "Work@12345"};
const Prodpayload = {orders:[{country:"India",productOrderedId:"68a961719320a140fe1ca57c"}]};
const orderdetailload = {id:"68b6ca47f669d6cb0aae1773"};
let token;
let orderid;

test.beforeAll(async()=>{
    const Apicontext = await request.newContext();
    const loginresponse = await Apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data : loginpayload,
    }); 
    expect (loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    token = loginresponseJson.token;
    console.log(token);
  });
   test('page login', async ({page})=>{
   await page.addInitScript(value=>{
    window.localStorage.setItem('token',value)
   },token);
   await page.goto("https://rahulshettyacademy.com/client/");
  //  expect (page).toHaveURL(/.*client/);
  });
      
      test('createorder',async()=>{
      const apiContext = await request.newContext();
      const createorderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: Prodpayload,
        headers:{
        'Authorization' : token,
        'Content-Type' : 'application/json',
      }
      });
      expect(createorderResponse.ok()).toBeTruthy();
     const createorderResponseJson = await createorderResponse.json();
     const orderid = createorderResponseJson.orders[0];
       console.log("OrderId:", orderid);
      console.log(createorderResponseJson);
      });
      test('idcheck',async()=>{
      const idcheck = await request.newContext();
      const orderdetailresponse = await idcheck.get("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68b6ca47f669d6cb0aae1773",
         {
        data: orderdetailload,
        headers:{
        'Authorization' : token,
      }
      })
      expect(orderdetailresponse.ok()).toBeTruthy();
      const orderdetailresponseJson = await orderdetailresponse.json();
      console.log(orderdetailresponseJson);
      
      //const orderid1 = await orderdetailresponseJson.id[0];      
      });
      // const button = await page.locator('button[routerlink="/dashboard/myorders"]');
      // button.
      // orderid = await page.locator("tbody");
      // const rows = await page.locator("tbody tr"); 
      
      // for(let i=0; i<await rows.count(); i++){
      
      // const RaworderId= await rows.nth(i).locator("th").textContext();

      // };