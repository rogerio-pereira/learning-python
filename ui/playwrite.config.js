import {defineConfig} from 'vitest/config'

export default defineConfig({
    testDir: './tests/e2e',
    testMatch: /.*\.spec\.js/,
    testIgnore: ['**/tests/unit/**'],
    use: {
        baseUrl: process.env.BASE_URL || 'http://localhost:5173',
        headless: true,
    },
    outputDir: './tests/e2e/results',
})