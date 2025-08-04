import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Global reset and base styles
globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
});

globalStyle('*', {
    margin: 0,
});

globalStyle('html, body', {
    height: '100%',
});

globalStyle('body', {
    fontFamily: vars.fontFamily.sans,
    lineHeight: vars.lineHeight.normal,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
});

globalStyle('img, picture, video, canvas, svg', {
    display: 'block',
    maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
    font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
    overflowWrap: 'break-word',
});

// Focus styles for accessibility
globalStyle(':focus-visible', {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
});