var loginpage = require('./Loginpage');
describe('Login Admin OKBOY', function() {
  it('should allow login', async function() {
    await loginpage.get();
    browser.driver.sleep(5000);
    expect (await loginpage.getlogo()).to
    expect(await loginpage.getEmailLabel()).toEqual('Correo');
    await loginpage.setEmail('admin@okboy.com');
    expect(await loginpage.getPasswordLabel()).toEqual('contraseña');
    await loginpage.setPassword('75Czjp2w');
    expect(await loginpage.getTextButton()).toEqual('Acceder');
    await loginpage.clickButtonLogin();
    browser.driver.sleep(5000);
    expect(await loginpage.getTextTitleService()).toEqual('Resumen de servicios semanal');
  });
});