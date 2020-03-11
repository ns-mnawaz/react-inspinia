import Page from './Page';

class LoginPage extends Page {
  setName(name) { $('#name').setValue(name); }
  setPhone(value) { $('#phone').setValue(value); }
  setEmail(email) { $('#email').setValue(email); }
  setPassword(password) { $('#password').setValue(password); }
  getTitle() { return browser.getTitle(); }

  open() {
    super.open('/');
    super.pause(1);
  }

  register() {
    super.open('/');
    super.click('#register');
  }

  login() {
    super.open('/#/register');
    super.pause(3);

    this.setName('Mir Nawaz');
    this.setPhone('3453528122');
    this.setEmail('inbox.mirnawaz@gmail.com');
    this.setPassword('secretpassword');
    super.click('.agree-policy');

    super.pause(2);
    super.click('#register_button');
    super.pause(3);
  }
}

export default new LoginPage();
