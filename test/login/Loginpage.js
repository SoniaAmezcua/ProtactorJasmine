var Loginpage = function() {
    var logo = element(by.xpath("/html/body/div[2]/div/img"));    
    var emailLabel = element(by.xpath('document.querySelector("body > div.login > div > form > div:nth-child(2) > label")'));
    var emailInput = element(by.xpath('document.querySelector("body > div.login > div > form > div:nth-child(2) > input[type=email]")'));
    var passwordLabel = element(by.xpath("/html/body/div[2]/div/form/div[3]/label"));
    var passwordInput = element(by.xpath("/html/body/div[2]/div/form/div[3]/input"));
    var buttonLogin = element(by.xpath("/html/body/div[2]/div/form/button"));
    var titleService = element(by.xpath("/html/body/div[2]/div[2]/div/main/div/div/div[1]/h2"));

     
    this.get = async function() {        
      await browser.manage().window().maximize();
      await browser.get('http://okboy-admin-develop.s3-website-us-west-2.amazonaws.com/');
    };

    this.getEmailLabel = async function() {
        return emailLabel.getText();
    };
  
    this.setEmail = async function(email) {
      await emailInput.sendKeys(email);
    };

    this.getPasswordLabel = async function() {
        return passwordLabel.getText();
    };

    this.setPassword = async function(password) {
        await passwordInput.sendKeys(password);
    };
  
    this.getlogo = async function() {
        return logo;
    };

    this.clickButtonLogin = async function () {
        await buttonLogin.click();
    };

    this.getTextButton = async function() {
        return buttonLogin.getText();
    };

    this.getTextTitleService = async function() {
        return buttonLogin.titleService();
    };

    this.getTextTitleService = async function() {
        return titleService.getText();
    };

    this.Login = async function(email, password) {
        await emailInput.sendKeys(email);
        await passwordInput.sendKeys(password);
        await buttonLogin.click();
    };

   };
  module.exports = new Loginpage();