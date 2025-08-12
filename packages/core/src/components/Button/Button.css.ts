import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const container = style({
  fontFamily: vars.fontFamily.sans,
  fontWeight: vars.fontWeight.medium,
  border: 0,
  borderRadius: vars.borderRadius.md,
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
  padding: `${vars.space['3']} ${vars.space['4']}`,
  fontSize: vars.fontSize.sm,
  transition: 'all 0.2s ease-in-out',
  
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.md,
  },
  
  ':active': {
    transform: 'translateY(0)',
    boxShadow: vars.shadow.sm,
  }
});

export const primaryButton = style({
  backgroundColor: vars.colors.primary500,
  color: vars.colors.white,
  
  ':hover': {
    backgroundColor: vars.colors.primary600,
  }
});

export const secondaryButton = style({
  backgroundColor: 'transparent',
  color: vars.colors.primary500,
  border: `1px solid ${vars.colors.primary500}`,
  
  ':hover': {
    backgroundColor: vars.colors.primary50,
  }
});

export const smallButton = style({
  fontSize: vars.fontSize.xs,
  padding: `${vars.space['2']} ${vars.space['3']}`,
});

export const largeButton = style({
  fontSize: vars.fontSize.lg,
  padding: `${vars.space['4']} ${vars.space['6']}`,
});