import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to combine class names
 * Similar to clsx but with better TypeScript support for our use case
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Create responsive style variants
 */
export const createResponsiveVariants = <T extends Record<string, any>>(
    variants: T
): T => variants;

/**
 * Create compound variants for complex component states
 */
export const createCompoundVariants = <T extends Record<string, any>>(
    variants: T[]
): T[] => variants;