import React from 'react';
import { container, primaryButton, secondaryButton, smallButton, largeButton } from "./Button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return smallButton;
      case 'large':
        return largeButton;
      default:
        return '';
    }
  };

  const getVariantClass = () => {
    return primary ? primaryButton : secondaryButton;
  };

  return (
    <button
      type="button"
      className={`${container} ${getVariantClass()} ${getSizeClass()}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};