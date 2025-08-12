import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme.css';

// Input wrapper
export const inputWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[1],
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

// Label styles
export const inputLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.colors.gray700,
  marginBottom: vars.space[1],
  lineHeight: vars.lineHeight.tight,
});

// Main input field
export const inputField = recipe({
  base: {
    width: '100%',
    border: `1px solid ${vars.colors.gray300}`,
    borderRadius: vars.borderRadius.md,
    backgroundColor: vars.colors.white,
    color: vars.colors.gray900,
    fontSize: vars.fontSize.base,
    lineHeight: vars.lineHeight.normal,
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    fontFamily: vars.fontFamily.sans,
    
    '::placeholder': {
      color: vars.colors.gray400,
    },

    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: vars.colors.gray400,
      },
      '&:focus': {
        borderColor: vars.colors.primary500,
        boxShadow: `0 0 0 3px ${vars.colors.primary500}20`,
      },
      '&:disabled': {
        backgroundColor: vars.colors.gray50,
        color: vars.colors.gray500,
        cursor: 'not-allowed',
        borderColor: vars.colors.gray200,
      },
    },
  },
  
  variants: {
    size: {
      sm: {
        height: '32px',
        padding: `0 ${vars.space[2]}`,
        fontSize: vars.fontSize.sm,
      },
      md: {
        height: '40px',
        padding: `0 ${vars.space[3]}`,
        fontSize: vars.fontSize.base,
      },
      lg: {
        height: '48px',
        padding: `0 ${vars.space[4]}`,
        fontSize: vars.fontSize.lg,
      },
    },
    
    state: {
      default: {},
      error: {
        borderColor: vars.colors.error,
        ':focus': {
          borderColor: vars.colors.error,
          boxShadow: `0 0 0 3px ${vars.colors.error}20`,
        },
      },
      success: {
        borderColor: vars.colors.success,
        ':focus': {
          borderColor: vars.colors.success,
          boxShadow: `0 0 0 3px ${vars.colors.success}20`,
        },
      },
    },
    
    hasLeftIcon: {
      true: {},
    },
    
    hasRightIcon: {
      true: {},
    },
  },
  
  compoundVariants: [
    // Left icon padding adjustments
    {
      variants: {
        hasLeftIcon: true,
        size: 'sm',
      },
      style: {
        paddingLeft: '32px',
      },
    },
    {
      variants: {
        hasLeftIcon: true,
        size: 'md',
      },
      style: {
        paddingLeft: '40px',
      },
    },
    {
      variants: {
        hasLeftIcon: true,
        size: 'lg',
      },
      style: {
        paddingLeft: '48px',
      },
    },
    
    // Right icon padding adjustments
    {
      variants: {
        hasRightIcon: true,
        size: 'sm',
      },
      style: {
        paddingRight: '32px',
      },
    },
    {
      variants: {
        hasRightIcon: true,
        size: 'md',
      },
      style: {
        paddingRight: '40px',
      },
    },
    {
      variants: {
        hasRightIcon: true,
        size: 'lg',
      },
      style: {
        paddingRight: '48px',
      },
    },
  ],
  
  defaultVariants: {
    size: 'md',
    state: 'default',
  },
});

// Icon container
export const iconContainer = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.gray400,
  pointerEvents: 'none',
  zIndex: 1,
  
  // Left icon positioning
  selectors: {
    '&.left': {
      left: vars.space[2],
    },
    '&.right': {
      right: vars.space[2],
      pointerEvents: 'auto', // Allow interaction for password toggle
      cursor: 'pointer',
      padding: vars.space[1],
      borderRadius: vars.borderRadius.sm,
      transition: 'color 0.2s ease-in-out',
      // Move :hover to selectors below
    },
  },
});

// Helper text styles
export const inputHelperText = style({
  fontSize: vars.fontSize.xs,
  color: vars.colors.gray500,
  marginTop: vars.space[1],
  lineHeight: vars.lineHeight.tight,
});

// Error state helper text
export const inputError = style({
  color: vars.colors.error,
});

// Success state helper text
export const inputSuccess = style({
  color: vars.colors.success,
});

// Export type for component props
export type InputVariants = NonNullable<Parameters<typeof inputField>[0]>;
