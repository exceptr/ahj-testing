import puppetteer from 'puppeteer';
// import server from './e2e.server';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      })
    })
    

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 50,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
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


// import puppetteer from 'puppeteer';
// import server from './e2e.server'

// jest.setTimeout(30000); // default puppeteer timeout

// describe('Credit Card Validator form', () => {
//   let browser = null;
//   let page = null;
//   const baseUrl = 'http://localhost:8888';
//   beforeAll(async () => {
//     await server.start();

//     browser = await puppetteer.launch({
//       headless: false, // show gui
//       slowMo: 100,
//       devtools: true, // show devTools
//     });
//     page = await browser.newPage();
//   });

//   afterAll(async () => {
//     await browser.close();
//     server.stop();
//   });

//   test('Ввод валидного номера карты', async () => {
//     await page.goto(baseUrl);

//     await page.waitForSelector('.widget');

//     const form = await page.$('.form-inline');
//     const input = await form.$('.form-input');
//     const button = await form.$('.validate-btn');

//     await input.type('4916838661195196');
//     await button.click();

//     await page.waitForSelector('[data-id="form-input"].valid');
//   });

//   test('Ввод невалидного номера краты', async () => {
//     jest.setTimeout(20000);
//     await page.goto(baseUrl);

//     await page.waitForSelector('.widget');

//     const form = await page.$('.form-inline');
//     const input = await form.$('.form-input');
//     const button = await form.$('.validate-btn');

//     await input.type('49168386611951962');
//     await button.click();

//     await page.waitForSelector('[data-id="form-input"].inValid');
//   });
// });