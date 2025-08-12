import React, { forwardRef } from 'react';
import { cn } from '../../utils/styles';
import { 
  cardContainer,
  cardHeader,
  cardBody,
  cardFooter,
  cardTitle,
  cardDescription,
} from './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card
   */
  /**
   * Visual variant of the card
   */
  variant?: 'elevated' | 'outlined' | 'filled'; // Replace with actual allowed values

  /**
   * Size of the card
   */
  size?: 'sm' | 'md' | 'lg'; // Replace with actual allowed values
  
  /**
   * Whether the card should have hover effects
   */
  hoverable?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  'data-testid'?: string;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  'data-testid'?: string;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  'data-testid'?: string;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level for semantic HTML
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  'data-testid'?: string;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  'data-testid'?: string;
}

/**
 * Card component with compound component pattern for flexible composition.
 * 
 * @example
 * ```tsx
 * <Card variant="elevated" hoverable>
 *   <Card.Header>
 *     <Card.Title level={3}>Product Title</Card.Title>
 *     <Card.Description>A brief description</Card.Description>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Main content goes here...</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button variant="primary">Learn More</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */

type CardComponent = React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      size = 'md',
      hoverable = false,
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
          cardContainer({
            variant,
            size,
            hoverable,
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
) as CardComponent;

Card.displayName = 'Card';

// Card Header component
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, 'data-testid': testId, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardHeader, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'Card.Header';

// Card Body component
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, 'data-testid': testId, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardBody, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';

// Card Footer component
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, 'data-testid': testId, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardFooter, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'Card.Footer';

// Card Title component
const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ level = 3, className, children, 'data-testid': testId, ...props }, ref) => {
    const Tag = `h${level}` as const;
    
    return (
      <Tag
        ref={ref}
        className={cn(cardTitle, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

CardTitle.displayName = 'Card.Title';

// Card Description component
const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, 'data-testid': testId, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(cardDescription, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'Card.Description';

// Attach compound components to the main Card component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;