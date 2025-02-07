import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly titleH1: Locator

  readonly dropdownPrincipal: Locator
  readonly dropdownDistributor: Locator
  readonly dropdownWholesaler: Locator
  readonly dropdownSupermarketMinimarket: Locator
  readonly dropdownRetailStore: Locator

  readonly sectionEwork: Locator
  readonly sectionEmitra: Locator
  readonly sectionEsuite: Locator
  readonly sectionElog: Locator
  readonly sectionEmagineer: Locator
  readonly sectionEpos: Locator


  constructor(page: Page) {
    this.page = page;
    this.titleH1 = page.locator('section>article>div:nth-child(2)>div')

    this.dropdownPrincipal = page.getByRole('button', { name: 'Principal' })
    this.dropdownDistributor = page.getByRole('button', { name: 'Distributor' })
    this.dropdownWholesaler = page.getByRole('button', { name: 'Wholesaler' })
    this.dropdownSupermarketMinimarket = page.getByRole('button', { name: 'Supermarket & Minimarket' })
    this.dropdownRetailStore = page.getByRole('button', { name: 'Retail Store' })

    this.sectionEwork = page.locator('section[id="products"]>ul>li:nth-child(1)')
    this.sectionEmitra = page.locator('section[id="products"]>ul>li:nth-child(2)')
    this.sectionEsuite = page.locator('section[id="products"]>ul>li:nth-child(3)')
    this.sectionElog = page.locator('section[id="products"]>ul>li:nth-child(4)')
    this.sectionEmagineer = page.locator('section[id="products"]>ul>li:nth-child(5)')
    this.sectionEpos = page.locator('section[id="products"]>ul>li:nth-child(6)')
  }

  async open() {
    await this.page.goto('/')
  }

  async verifyPage() {
    await expect(this.page).toHaveTitle('eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri')
    await expect(this.titleH1).toContainText('Empower Enterprises to Thrive in the Digital Age with Innovation and Creativity')
    await expect(this.dropdownPrincipal).toBeVisible()
    await expect(this.dropdownDistributor).toBeVisible()
    await expect(this.dropdownWholesaler).toBeVisible()
    await expect(this.dropdownSupermarketMinimarket).toBeVisible()
    await expect(this.dropdownRetailStore).toBeVisible()

    await expect(this.sectionEwork).toBeVisible()
    await expect(this.sectionEwork).toContainText('Your Sales Force Automation')
    await expect(this.sectionEmitra).toBeVisible()
    await expect(this.sectionEmitra).toContainText('Your Partner for Market Success')
    await expect(this.sectionEsuite).toBeVisible()
    await expect(this.sectionEsuite).toContainText('Your Distribution Management System')
    await expect(this.sectionElog).toBeVisible()
    await expect(this.sectionElog).toContainText('Your Reliable Logistics Solution')
    await expect(this.sectionEmagineer).toBeVisible()
    await expect(this.sectionEmagineer).toContainText('Your Marketing Agency')
    await expect(this.sectionEpos).toBeVisible()
    await expect(this.sectionEpos).toContainText('Your Point-Of-Sale Powerhouse')
  }

  async clickdropdownPrincipal() {
    await this.dropdownPrincipal.click()
  }
  async clickdropdownDistributor() {
    await this.dropdownDistributor.click()
  }
  async clickdropdownWholesaler() {
    await this.dropdownWholesaler.click()
  }
  async clickdropdownSupermarketMinimarket() {
    await this.dropdownSupermarketMinimarket.click()
  }
  async clickdropdownRetailStore() {
    await this.dropdownRetailStore.click()
  }





}
