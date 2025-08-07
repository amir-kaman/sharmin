import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [vanillaExtractPlugin()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/test-setup.ts'],
        globals: true,
        css: true, // Enable CSS processing in tests
    },
});