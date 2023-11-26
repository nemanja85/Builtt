import { expect, test } from '@playwright/test';

test('After successfully login User choose products for cart', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  await page.getByLabel('Email adresa').click();
  await page.getByLabel('Email adresa').fill('admin@admin.com');
  await page.getByLabel('Lozinka').click();
  await page.getByLabel('Lozinka').fill('admin12345');
  await page.getByRole('button', { name: 'Prijavi se na nalog' }).click();
  await expect(page).toHaveURL('http://localhost:5173/shop');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:5173/cart');
});
