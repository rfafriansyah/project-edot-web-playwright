import { test as base } from '@playwright/test';
import { HomePage } from './Home.page';
import { NavbarPage } from './Navbar.page';
import { FootbarPage } from './Footbar.page';

type MyFixtures = {
  homePage: HomePage;
  navbarPage: NavbarPage
  footbarPage: FootbarPage

};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },
  footbarPage: async ({ page }, use) => {
    await use(new FootbarPage(page));
  },


});

export { expect } from '@playwright/test';

