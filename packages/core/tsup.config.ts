import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom'],
    jsx: 'automatic',
    esbuildOptions: (options) => {
        // Enable Vanilla Extract processing
        options.loader = {
            ...options.loader,
            '.css.ts': 'ts',
        };
    },
});