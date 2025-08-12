import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/styles';
import { 
  inputWrapper,
  inputField,
  inputLabel,
  inputHelperText,
  inputError,
  inputSuccess,
  iconContainer,
  type InputVariants 
} from './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual size of the input
   */
  size?: InputVariants['size'];
  
  /**
   * Current state of the input for styling
   */
  state?: InputVariants['state'];
  
  /**
   * Label text for the input
   */
  label?: string;
  
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Success message to display
   */
  success?: string;
  
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Whether the input should take full width
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;

  /**
   * Whether to show/hide password (for password inputs)
   */
  showPassword?: boolean;

  /**
   * Callback when show/hide password is toggled
   */
  onTogglePassword?: () => void;
}

/**
 * Input component with validation states, icons, and accessibility features.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Input label="Email" type="email" placeholder="Enter your email" />
 * 
 * // With validation
 * <Input 
 *   label="Password" 
 *   type="password" 
 *   error="Password must be at least 8 characters"
 * />
 * 
 * // With icons
 * <Input 
 *   label="Search" 
 *   leftIcon={<SearchIcon />}
 *   placeholder="Search..."
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      state,
      label,
      helperText,
      error,
      success,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      type = 'text',
      showPassword,
      onTogglePassword,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const [internalId] = useState(() => id || `input-${Math.random().toString(36).substr(2, 9)}`);
    
    // Determine the current state based on props
    const currentState = error ? 'error' : success ? 'success' : state || 'default';
    
    // Determine actual input type (handle password visibility)
    const inputType = type === 'password' && showPassword ? 'text' : type;

    // Generate IDs for accessibility
    const helperId = helperText || error || success ? `${internalId}-helper` : undefined;
    const labelId = label ? `${internalId}-label` : undefined;

    return (
      <div 
        className={cn(inputWrapper({ fullWidth }), className)}
        data-testid={testId}
      >
        {label && (
          <label 
            htmlFor={internalId}
            id={labelId}
            className={inputLabel}
            data-testid={`${testId}-label`}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div 
              className={cn(iconContainer, 'left')} 
              data-testid={`${testId}-left-icon`}
            >
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={internalId}
            type={inputType}
            className={cn(
              inputField({
                size,
                state: currentState,
                hasLeftIcon: !!leftIcon,
                hasRightIcon: !!rightIcon || (type === 'password' && !!onTogglePassword),
              })
            )}
            aria-describedby={helperId}
            aria-labelledby={labelId}
            aria-invalid={currentState === 'error'}
            data-testid={`${testId}-input`}
            {...props}
          />
          
          {/* Password visibility toggle */}
          {type === 'password' && onTogglePassword && (
            <button
              type="button"
              className={cn(iconContainer, 'right')}
              onClick={onTogglePassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              data-testid={`${testId}-password-toggle`}
            >
              {showPassword ? (
                // Eye slash icon (hidden)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                // Eye icon (visible)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          )}
          
          {rightIcon && !(type === 'password' && onTogglePassword) && (
            <div 
              className={cn(iconContainer, 'right')} 
              data-testid={`${testId}-right-icon`}
            >
              {rightIcon}
            </div>
          )}
        </div>
        
        {/* Helper text, error, or success message */}
        {(helperText || error || success) && (
          <div 
            id={helperId}
            className={cn(
              inputHelperText,
              {
                [inputError]: !!error,
                [inputSuccess]: !!success && !error,
              }
            )}
            data-testid={`${testId}-helper`}
          >
            {error || success || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';