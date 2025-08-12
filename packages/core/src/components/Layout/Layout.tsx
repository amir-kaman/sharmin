import React, { forwardRef } from 'react';
import { cn } from '../../utils/styles';
import { 
  containerStyles,
  stackStyles,
  flexStyles,
  type ContainerVariants,
  type StackVariants,
  type FlexVariants 
} from './Layout.css';

// Container Component
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container
   */
  size?: ContainerVariants['size'];
  
  /**
   * Whether to center the container
   */
  centered?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Container component for consistent max-width layouts
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = 'lg',
      centered = true,
      className,
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerStyles({
            size,
            centered,
          }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

// Stack Component
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the stack
   */
  direction?: StackVariants['direction'];
  
  /**
   * Spacing between items
   */
  spacing?: StackVariants['spacing'];
  
  /**
   * Alignment of items
   */
  align?: StackVariants['align'];
  
  /**
   * Justification of items
   */
  justify?: StackVariants['justify'];
  
  /**
   * Whether items should wrap
   */
  wrap?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Stack component for consistent spacing between elements
 * 
 * @example
 * ```tsx
 * // Vertical stack with medium spacing
 * <Stack direction="column" spacing="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * 
 * // Horizontal stack with small spacing
 * <Stack direction="row" spacing="sm" align="center">
 *   <Button>Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'column',
      spacing = 'md',
      align,
      justify,
      wrap = false,
      className,
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          stackStyles({
            direction,
            spacing,
            align,
            justify,
            wrap,
          }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

// Flex Component
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Flex direction
   */
  direction?: FlexVariants['direction'];
  
  /**
   * Align items
   */
  align?: FlexVariants['align'];
  
  /**
   * Justify content
   */
  justify?: FlexVariants['justify'];
  
  /**
   * Gap between items
   */
  gap?: FlexVariants['gap'];
  
  /**
   * Whether items should wrap
   */
  wrap?: FlexVariants['wrap'];
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Flex component for flexible layouts
 * 
 * @example
 * ```tsx
 * // Center content horizontally and vertically
 * <Flex justify="center" align="center" className="h-screen">
 *   <Card>Centered content</Card>
 * </Flex>
 * 
 * // Space between items
 * <Flex justify="space-between" align="center">
 *   <h1>Title</h1>
 *   <Button>Action</Button>
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align,
      justify,
      gap,
      wrap = 'nowrap',
      className,
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          flexStyles({
            direction,
            align,
            justify,
            gap,
            wrap,
          }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

// Spacer Component
export interface SpacerProps {
  /**
   * Size of the spacer
   */
  size?: keyof typeof import('../../theme.css').vars.space;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Spacer component for adding consistent spacing
 */
export const Spacer: React.FC<SpacerProps> = ({ 
  size = '4', 
  className, 
  'data-testid': testId 
}) => {
  return (
    <div
      className={className}
      style={{ 
        width: `var(--space-${size})`,
        height: `var(--space-${size})`,
        flexShrink: 0,
      }}
      data-testid={testId}
      aria-hidden="true"
    />
  );
};