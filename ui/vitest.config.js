import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup/vitest.setup.js',
    include: ['tests/unit/**/*.spec.js'],
    coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        reportsDirectory: './tests/coverage',
        all: true,
        include: ['src/**/*.{js,vue}'],
    },
  },
})