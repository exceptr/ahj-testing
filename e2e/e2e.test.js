import puppetteer from 'puppeteer';
import server from './e2e.server'

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    await server.start();

    browser = await puppetteer.launch({
      headless: true, // show gui
      args: ["--no-sandbox"],
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.stop();
  });

  test('Ввод валидного номера карты', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.widget');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-input');
    const button = await form.$('.validate-btn');

    await input.type('4916838661195196');
    await button.click();

    await page.waitForSelector('[data-id="form-input"].valid');
  });

  test('Ввод невалидного номера краты', async () => {
    jest.setTimeout(20000);
    await page.goto(baseUrl);

    await page.waitForSelector('.widget');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-input');
    const button = await form.$('.validate-btn');

    await input.type('49168386611951962');
    await button.click();

    await page.waitForSelector('[data-id="form-input"].inValid');
  });
});