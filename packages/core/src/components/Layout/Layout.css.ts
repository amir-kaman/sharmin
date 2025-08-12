// packages/core/src/components/Layout/Layout.css.ts
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../theme.css';

// Container styles
export const containerStyles = recipe({
  base: {
    width: '100%',
    paddingLeft: vars.space[4],
    paddingRight: vars.space[4],
    
    '@media': {
      [`screen and (min-width: 640px)`]: {
        paddingLeft: vars.space[6],
        paddingRight: vars.space[6],
      },
    },
  },
  
  variants: {
    size: {
      sm: {
        maxWidth: '640px',
      },
      md: {
        maxWidth: '768px',
      },
      lg: {
        maxWidth: '1024px',
      },
      xl: {
        maxWidth: '1280px',
      },
      '2xl': {
        maxWidth: '1536px',
      },
      full: {
        maxWidth: 'none',
      },
    },
    
    centered: {
      true: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
  
  defaultVariants: {
    size: 'lg',
    centered: true,
  },
});

// Stack styles
export const stackStyles = recipe({
  base: {
    display: 'flex',
  },
  
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    
    spacing: {
      xs: {
        gap: vars.space[1],
      },
      sm: {
        gap: vars.space[2],
      },
      md: {
        gap: vars.space[4],
      },
      lg: {
        gap: vars.space[6],
      },
      xl: {
        gap: vars.space[8],
      },
    },
    
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
      'space-evenly': {
        justifyContent: 'space-evenly',
      },
    },
    
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
  
  defaultVariants: {
    direction: 'column',
    spacing: 'md',
  },
});

// Flex styles
export const flexStyles = recipe({
  base: {
    display: 'flex',
  },
  
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
      'space-evenly': {
        justifyContent: 'space-evenly',
      },
    },
    
    gap: {
      xs: {
        gap: vars.space[1],
      },
      sm: {
        gap: vars.space[2],
      },
      md: {
        gap: vars.space[4],
      },
      lg: {
        gap: vars.space[6],
      },
      xl: {
        gap: vars.space[8],
      },
    },
    
    wrap: {
      nowrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse',
      },
    },
  },
  
  defaultVariants: {
    direction: 'row',
    wrap: 'nowrap',
  },
});

// Export types
export type ContainerVariants = NonNullable<Parameters<typeof containerStyles>[0]>;
export type StackVariants = NonNullable<Parameters<typeof stackStyles>[0]>;
export type FlexVariants = NonNullable<Parameters<typeof flexStyles>[0]>;