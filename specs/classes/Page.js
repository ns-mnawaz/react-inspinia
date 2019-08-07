export default class Page {
  open(path) {
    browser.url(path);
  }
  click(eName) {
    $(eName).click();
  }
  pause(sec) {
    browser.pause(sec * 1000);
  }
}
