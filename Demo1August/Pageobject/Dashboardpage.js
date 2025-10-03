class loginPage{
constructor (page){


     this.page = page;    
    this.Username = page.locator('#userEmail');
    this.Password = page.locator('#userPassword');
    this.signInpage = page.locator("[type='submit']");


}
async goTo(){
     await this.page.goTo("https//rahulshettyacademy.com/client/");
}

async validLogin (username, Password){

await this.username.type(username);
await this.Password.type(Password);
await this.signInpage.click();

}
}

