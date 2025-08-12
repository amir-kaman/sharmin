import type { Preview } from '@storybook/react-vite';
import React from 'react';

// Import the global CSS and theme
import '../../../packages/core/src/global.css';
import { theme } from '../../../packages/core/src/theme.css';

// Apply the theme class to the body
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => React.createElement(
      'div',
      { className: theme },
      React.createElement(Story)
    ),
  ],
};

export default preview;
