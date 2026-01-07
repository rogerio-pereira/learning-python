import { test, expect } from '@playwright/test'

test('home page shows dashboard title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle("MotoTrack - Dashboard"); //Title is empty and will be replaced on router.beforeEach
})