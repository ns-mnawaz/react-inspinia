import Page from './Page';

class LoginPage extends Page {
  setName(name) { $('#name').setValue(name); }
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
    super.open('/#/react-inspinia/register');
    this.setName('Mir Nawaz');
    this.setEmail('inbox.mirnawaz@gmail.com');
    this.setPassword('secretpassword');
    super.click('.aggree_policy');
    super.pause(2);
    super.click('#login_button');
    super.pause(3);
  }
}

export default new LoginPage();
