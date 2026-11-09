// The About page shows the city line.
import { expect, test } from '@playwright/test'
import { BASE } from './site'

test.use({ viewport: { width: 320, height: 640 } })

for (const path of [`${BASE}about/`, `${BASE}zh/about/`])
  test(`${path}: city line`, async ({ page }) => {
    await page.goto(path)
    await expect(page.locator('.location')).toBeVisible()
  })
