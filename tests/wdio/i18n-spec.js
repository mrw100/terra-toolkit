/* global browser, describe, it, before, expect, Terra */
let testLocale;
let browserLocale;

describe('I18n Locale', () => {
  before(() => {
    browser.url('/i18n.html');
    testLocale = browser.options.locale || 'en';
    browserLocale = browser.getAttribute('html', 'lang');
  });

  it('Express correctly sets the application locale', () => {
    browser.setValue('#input-wdio-defined', testLocale);
    browser.setValue('#input-actual', browserLocale);
    expect(testLocale).to.equal(browserLocale);
  });

  Terra.should.matchScreenshot({ selector: '#i18n-validation' });
});