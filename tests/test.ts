import { expect, test } from '@playwright/test';

test('home page has expected h1 with Welcome Message', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('Welcome to Beyblade Tracker');
});
