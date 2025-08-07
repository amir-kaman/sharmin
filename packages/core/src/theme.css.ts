import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { colors, spacing, typography, borderRadius, shadows } from '@amir-kaman/sharmin-tokens';

// Define the theme contract (CSS custom properties)
export const vars = createThemeContract({
    colors: {
        // Primary colors
        primary50: null,
        primary100: null,
        primary200: null,
        primary300: null,
        primary400: null,
        primary500: null,
        primary600: null,
        primary700: null,
        primary800: null,
        primary900: null,
        primary950: null,

        // Gray colors
        gray50: null,
        gray100: null,
        gray200: null,
        gray300: null,
        gray400: null,
        gray500: null,
        gray600: null,
        gray700: null,
        gray800: null,
        gray900: null,
        gray950: null,

        // Semantic colors
        success: null,
        warning: null,
        error: null,
        info: null,

        // Base colors
        white: null,
        black: null,
        transparent: null,
    },
    space: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        8: null,
        10: null,
        12: null,
        16: null,
        20: null,
        24: null,
    },
    fontSize: {
        xs: null,
        sm: null,
        base: null,
        lg: null,
        xl: null,
        '2xl': null,
        '3xl': null,
        '4xl': null,
    },
    fontFamily: {
        sans: null,
        mono: null,
    },
    fontWeight: {
        light: null,
        normal: null,
        medium: null,
        semibold: null,
        bold: null,
    },
    lineHeight: {
        tight: null,
        normal: null,
        relaxed: null,
    },
    borderRadius: {
        none: null,
        sm: null,
        base: null,
        md: null,
        lg: null,
        xl: null,
        '2xl': null,
        full: null,
    },
    shadow: {
        xs: null,
        sm: null,
        base: null,
        md: null,
        lg: null,
        xl: null,
    },
});

// Create the default theme
export const theme = createTheme(vars, {
    colors: {
        // Primary colors
        primary50: colors.primary[50],
        primary100: colors.primary[100],
        primary200: colors.primary[200],
        primary300: colors.primary[300],
        primary400: colors.primary[400],
        primary500: colors.primary[500],
        primary600: colors.primary[600],
        primary700: colors.primary[700],
        primary800: colors.primary[800],
        primary900: colors.primary[900],
        primary950: colors.primary[950],

        // Gray colors
        gray50: colors.gray[50],
        gray100: colors.gray[100],
        gray200: colors.gray[200],
        gray300: colors.gray[300],
        gray400: colors.gray[400],
        gray500: colors.gray[500],
        gray600: colors.gray[600],
        gray700: colors.gray[700],
        gray800: colors.gray[800],
        gray900: colors.gray[900],
        gray950: colors.gray[950],

        // Semantic colors
        success: colors.semantic.success,
        warning: colors.semantic.warning,
        error: colors.semantic.error,
        info: colors.semantic.info,

        // Base colors
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
    },
    space: spacing,
    fontSize: typography.fontSize,
    fontFamily: {
        sans: typography.fontFamily.sans.join(', '),
        mono: typography.fontFamily.mono.join(', '),
    },
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    borderRadius,
    shadow: shadows,
});

// Breakpoints for responsive design
export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
};

// Media queries helper
export const media = {
    sm: `screen and (min-width: ${breakpoints.sm})`,
    md: `screen and (min-width: ${breakpoints.md})`,
    lg: `screen and (min-width: ${breakpoints.lg})`,
    xl: `screen and (min-width: ${breakpoints.xl})`,
};