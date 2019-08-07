import Home from './classes/Home';
import assert from 'assert';

describe('Get Hired !!! Home Page', () => {
  it('should have the right title', () => {
    Home.open();
    const title = Home.getTitle();
    assert.strictEqual(title, 'Get Hired');
  });

  it('should click on register', () => {
    Home.register();
  });

  it('should click on login', () => {
    Home.login();
  });
});
