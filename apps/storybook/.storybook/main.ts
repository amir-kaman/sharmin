import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import path, { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  async viteFinal(config) {
    // Add Vanilla Extract plugin with proper configuration
    config?.plugins?.push(
      vanillaExtractPlugin({
        // Ensure identifiers are stable for Storybook
        identifiers: 'debug'
      })
    );
    
    if (!config.resolve) {
      config.resolve = {};
    }
    
    // Update alias to point to the correct location
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@amir-kaman/sharmin-core': path.resolve(__dirname, "../../../packages/core/src"),
      '@amir-kaman/sharmin-tokens': path.resolve(__dirname, "../../../packages/tokens/src"),
    };

    // Ensure CSS is processed
    if (!config.css) {
      config.css = {};
    }

    // Add dependency optimization for the workspace packages
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
    if (!config.optimizeDeps.include) {
      config.optimizeDeps.include = [];
    }
    config.optimizeDeps.include.push('@amir-kaman/sharmin-core', '@amir-kaman/sharmin-tokens');

    // Ensure Vanilla Extract files are included in the build
    if (!config.optimizeDeps.exclude) {
      config.optimizeDeps.exclude = [];
    }
    
    return config;
  },
};

export default config;