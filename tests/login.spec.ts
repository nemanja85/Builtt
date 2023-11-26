import { expect, test } from '@playwright/test';

test('Validation should show popup when fields are empty', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  expect(await page.getByText('Polje email je obavezno.').isVisible()).toBeFalsy();
  expect(await page.getByText('Polje lozinka je obavezno.').isVisible()).toBeFalsy();
  await page.getByRole('button', { name: 'Prijavi se na nalog' }).click();
  expect(await page.getByText('Polje email je obavezno.').isVisible()).toBeTruthy();
  expect(await page.getByText('Polje lozinka je obavezno.').isVisible()).toBeTruthy();
});

test('Unauthorized user access the shop page and get the message to login first', async ({ page }) => {
  await page.goto('http://localhost:5173/shop');
  await page.goto('http://localhost:5173/auth/login?message=Molimo%20vas%20da%20se%20ulogujete');
  await expect(await page.getByText('Molimo vas da se ulogujete').isVisible()).toBeTruthy();
});
