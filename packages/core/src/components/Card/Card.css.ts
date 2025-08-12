import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../theme.css';

// Main card container
export const cardContainer = recipe({
  base: {
    backgroundColor: vars.colors.white,
    borderRadius: vars.borderRadius.lg,
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
  },
  
  variants: {
    variant: {
      elevated: {
        boxShadow: vars.shadow.md,
        border: 'none',
      },
      outlined: {
        border: `1px solid ${vars.colors.gray200}`,
        boxShadow: 'none',
      },
      filled: {
        backgroundColor: vars.colors.gray50,
        border: 'none',
        boxShadow: 'none',
      },
    },
    
    size: {
      sm: {
        maxWidth: '321px',
      },
      md: {
        maxWidth: '400px',
      },
      lg: {
        maxWidth: '480px',
      },
      full: {
        width: '100%',
        maxWidth: 'none',
      },
    },
    
    hoverable: {
      true: {
        cursor: 'pointer',
        
        ':hover': {
          transform: 'translateY(-2px)',
        },
      },
    },
  },
  
  compoundVariants: [
    {
      variants: {
        variant: 'elevated',
        hoverable: true,
      },
      style: {
        ':hover': {
          boxShadow: vars.shadow.lg,
        },
      },
    },
    {
      variants: {
        variant: 'outlined',
        hoverable: true,
      },
      style: {
        ':hover': {
          borderColor: vars.colors.gray300,
          boxShadow: vars.shadow.sm,
        },
      },
    },
  ],
  
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
  },
});

// Card header
export const cardHeader = style({
  padding: vars.space[6],
  paddingBottom: vars.space[4],
  borderBottom: `1px solid ${vars.colors.gray100}`,
  
  selectors: {
    '&:last-child': {
      paddingBottom: vars.space[6],
      borderBottom: 'none',
    },
  },
});

// Card body
export const cardBody = style({
  padding: vars.space[6],
  
  selectors: {
    [`${cardHeader} + &`]: {
      paddingTop: vars.space[4],
    },
    '&:last-child': {
      paddingBottom: vars.space[6],
    },
  },
});

// Card footer
export const cardFooter = style({
  padding: vars.space[6],
  paddingTop: vars.space[4],
  borderTop: `1px solid ${vars.colors.gray100}`,
  backgroundColor: vars.colors.gray25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.space[3],
  
  selectors: {
    '&:first-child': {
      paddingTop: vars.space[6],
      borderTop: 'none',
      backgroundColor: 'transparent',
    },
  },
});

// Card title
export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.colors.gray900,
  lineHeight: vars.lineHeight.tight,
  margin: 0,
  marginBottom: vars.space[2],
  
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

// Card description
export const cardDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.colors.gray600,
  lineHeight: vars.lineHeight.normal,
  margin: 0,
  
  selectors: {
    [`${cardTitle} + &`]: {
      marginTop: vars.space[1],
    },
  },
});

// Export type for component props
export type CardVariants = NonNullable<Parameters<typeof cardContainer>[0]>;
