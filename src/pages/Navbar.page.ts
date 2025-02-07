import { Locator, Page, expect } from '@playwright/test';
import { AsyncCallbackSet } from 'next/dist/server/lib/async-callback-set';

export class NavbarPage {
  readonly page: Page;
  readonly logoEdot: Locator
  readonly buttonHome: Locator

  readonly dropdownProducts: Locator
  readonly buttonEworkLearnMoreProducts: Locator
  readonly buttonEmitraBuyerProducts: Locator
  readonly buttonEmitraSellerProducts: Locator
  readonly buttonEsuiteLearnMoreProducts: Locator
  readonly buttonElogCustomersProducts: Locator
  readonly buttonElogVendorProducts: Locator
  readonly buttonEmagineerLearnMoreProducts: Locator
  readonly buttonEposProducts: Locator

  readonly dropdownIndustries: Locator
  readonly buttonPrincipalIndustries: Locator
  readonly buttonDistributorIndustries: Locator
  readonly buttonWholesalerIndustries: Locator
  readonly buttonSupermarketMinimarketIndustries: Locator
  readonly buttonRetailStoreIndustries: Locator


  readonly buttonArticles: Locator

  readonly buttonReferral: Locator

  readonly buttonTryForFree: Locator
  readonly buttonContactUs: Locator



  constructor(page: Page) {
    this.page = page;
    this.logoEdot = page.getByRole('link', { name: 'edot', exact: true })
    this.buttonHome = page.locator('header').getByRole('link', { name: 'Home' })

    this.dropdownProducts = page.getByRole('button', { name: 'Products' })
    this.buttonEworkLearnMoreProducts = page.getByRole('listitem').filter({ hasText: 'Your Sales Force' }).getByRole('button')
    this.buttonEmitraBuyerProducts = page.getByRole('button', { name: 'For Buyer' })
    this.buttonEmitraSellerProducts = page.getByRole('button', { name: 'For Seller' })
    this.buttonEsuiteLearnMoreProducts = page.getByRole('listitem').filter({ hasText: 'Your Distribution Management' }).getByRole('button')
    this.buttonElogCustomersProducts = page.getByRole('button', { name: 'For Customer' })
    this.buttonElogVendorProducts = page.getByRole('button', { name: 'For Vendor' })
    this.buttonEmagineerLearnMoreProducts = page.getByRole('listitem').filter({ hasText: 'Your Marketing AgencyLearn' }).getByRole('button')
    this.buttonEposProducts = page.getByRole('heading', { name: 'Your Point-Of-Sale Powerhouse' })

    this.dropdownIndustries = page.getByRole('button', { name: 'Industries' })
    this.buttonPrincipalIndustries = page.getByRole('link', { name: 'industry edot Principal Gain' })
    this.buttonDistributorIndustries = page.getByRole('link', { name: 'industry edot Distributor' })
    this.buttonWholesalerIndustries = page.getByRole('link', { name: 'industry edot Wholesaler' })
    this.buttonSupermarketMinimarketIndustries = page.getByRole('link', { name: 'industry edot Supermarket &' })
    this.buttonRetailStoreIndustries = page.getByRole('link', { name: 'industry edot Retail Store' })

    this.buttonArticles = page.locator('header').getByRole('link', { name: 'Articles' })
    this.buttonReferral = page.getByRole('link', { name: 'Referral' })

    this.buttonTryForFree = page.getByRole('button', { name: 'Try for Free' })
    this.buttonContactUs = page.locator('header').getByRole('button', { name: 'Contact Us' })
  }

  async verifyPage(link: any) {
    await expect(this.logoEdot).toBeVisible()
    await expect(this.logoEdot).toHaveAttribute('href', link);
    await expect(this.buttonHome).toBeVisible()
    await expect(this.dropdownProducts).toBeVisible()
    await expect(this.dropdownIndustries).toBeVisible()
    await expect(this.buttonArticles).toBeVisible()
    await expect(this.buttonReferral).toBeVisible()

    await expect(this.buttonTryForFree).toBeVisible()
    await expect(this.buttonContactUs).toBeVisible()
  }

  async clickdropdownProducts() {
    await this.dropdownProducts.click()
    await expect(this.buttonEworkLearnMoreProducts).toBeVisible()
    await expect(this.buttonEmitraBuyerProducts).toBeVisible()
    await expect(this.buttonEmitraSellerProducts).toBeVisible()
    await expect(this.buttonEsuiteLearnMoreProducts).toBeVisible()
    await expect(this.buttonElogCustomersProducts).toBeVisible()
    await expect(this.buttonElogVendorProducts).toBeVisible()
    await expect(this.buttonEmagineerLearnMoreProducts).toBeVisible()
    await expect(this.buttonEposProducts).toBeVisible()

  }
  async clickdropdownIndustries() {
    await this.dropdownIndustries.click()
    await expect(this.buttonPrincipalIndustries).toBeVisible()
    await expect(this.buttonDistributorIndustries).toBeVisible()
    await expect(this.buttonWholesalerIndustries).toBeVisible()
    await expect(this.buttonSupermarketMinimarketIndustries).toBeVisible()
    await expect(this.buttonRetailStoreIndustries).toBeVisible()
  }
  async clickbuttonArticles() {
    await this.buttonArticles.click()
  }
  async clickbuttonReferral() {
    await this.buttonReferral.click()
  }

  async clickbuttonTryForFree() {
    await this.buttonTryForFree.click()
  }
  async clickbuttonContactUs() {
    await this.buttonContactUs.click()
  }




}
