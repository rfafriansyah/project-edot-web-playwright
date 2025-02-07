import { test } from '../src/pages/Base.page';

test.describe('Home Page Edot - Positive', () => {

  test('user be able to load Home Page Edot @rhama.fahri', async ({ page, homePage, navbarPage
  }) => {
    await homePage.open()
    // await homePage.verifyPage()
    // await navbarPage.verifyPage('/')
    await navbarPage.clickdropdownIndustries()
    await page.waitForTimeout(5000)
  });
});
