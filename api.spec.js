const { test, expect, request } =require ('@playwright/test');
const loginpayload = {userEmail: "test1@gmail.com", userPassword: "Work@12345"};
let token;


test.beforeAll(async()=>{
    const Acontext = await request.newContext();
    const loginresponse = await Acontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data : loginpayload 
    });
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    token = loginresponseJson.token;
    console.log("Token:", token);
});

test.beforeEach(()=>{


 });

test('login file', async({page})=>{
  
  await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);
  },token);
await page.goto("https://rahulshettyacademy.com/client/");
});

