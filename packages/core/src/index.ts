// packages/core/src/index.ts
import './global.css';

// Export all components
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

// export { Card } from './components/Card/Card';
// export type { CardProps } from './components/Card/Card';

export { 
  Container, 
  Stack, 
  Flex, 
  Spacer 
} from './components/Layout/Layout';
export type { 
  ContainerProps, 
  StackProps, 
  FlexProps, 
  SpacerProps 
} from './components/Layout/Layout';

// Export theme and styling utilities
export { theme, vars } from './theme.css';
export { cn } from './utils/styles';

// Re-export tokens for convenience
export { tokens } from '@amir-kaman/sharmin-tokens';