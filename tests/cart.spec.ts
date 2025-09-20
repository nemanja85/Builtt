import { test, expect } from '@playwright/test';

test.describe('Cart Component', () => {

  test('should display the cart title', async ({ page }) => {
    const title = await page.locator('h2').textContent();
    expect(title).toBe('Tvoja korpa');
  });

  test('should display cart items', async ({ page }) => {
    await page.evaluate(() => {
      // Mocking the store state for testing
      window.localStorage.setItem('mockStore', JSON.stringify({
        products: {
          productsInBasket: [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
          ],
          subtotal: 300,
          discount: 50,
          grandTotal: 250,
        },
      }));
    });

    await page.reload();

    const cartItems = await page.locator('.cart-item-selector');
    expect(await cartItems.count()).toBe(2);
  });

  test('should display correct totals', async ({ page }) => {
    const subtotal = await page.locator('text=Ukupno').nth(1).textContent();
    const discount = await page.locator('text=Ušteda').nth(1).textContent();
    const grandTotal = await page.locator('text=Ukupno za uplatu').nth(1).textContent();

    expect(subtotal).toContain('300');
    expect(discount).toContain('-50');
    expect(grandTotal).toContain('250');
  });

  test('should show notification on button click', async ({ page }) => {
    await page.click('button:has-text("Prijavi se za brže plaćanje")');

    const notification = await page.locator('.notification-selector');
    await expect(notification).toBeVisible();
    await expect(notification).toHaveText('Uspesno ste izvrsili kupovinu');
    await page.waitForTimeout(2500);
    await expect(notification).not.toBeVisible();
  });
});
