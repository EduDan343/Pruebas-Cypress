const { loginPage } = require("./pageObjects/LoginPage")

describe('login con POM', function () {

    this.beforeEach( () => {
        loginPage.visit();
    })

    it('login erroreo', function () {
        loginPage.validateLoginPage();
        loginPage.login('aaa', 'bbb');
        loginPage.validateErrorLogin();
    })

    it('login exitoso', function () {
        loginPage.validateLoginPage();
        loginPage.login("username", "password");
        loginPage.validateSuccessLogin();
    })

})