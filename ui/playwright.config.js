import {defineConfig} from '@playwright/test'

export default defineConfig({
    testDir: './tests/e2e',
    testMatch: /.*\.spec\.js/,
    testIgnore: ['**/tests/unit/**'],
    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:5173',
        headless: true,
    },
    outputDir: './tests/e2e/results',
})