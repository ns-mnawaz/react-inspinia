const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Get Hired');
    });

    it('should click on register', () => {
        browser.url('/');
        $('#register').click();
    });

    it('should click on login', () => {
        browser.url('/#/react-inspinia/register');
        $('#name').setValue('Mir Nawaz');
        $('#login_button').click();
    });

});