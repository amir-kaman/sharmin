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
    config?.plugins?.push(vanillaExtractPlugin());
    if (!config.resolve) {
      config.resolve = {};
    }
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@amir-kaman/sharmin-core': path.resolve(__dirname, "../../../packages/core/src/components"),
    };
    return config;
  },
};
export default config;