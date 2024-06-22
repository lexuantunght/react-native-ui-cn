import React from 'react';
import { ThemeColorsToken, ThemeContextValue, ThemeProviderValue } from '../types';
import { BUTTON_THEMES } from '../themes/button.theme';

const CONTENT_SIZE = {
    sm: {
        content: 14,
    },
    md: {
        content: 16,
    },
    lg: {
        content: 18,
    },
};

const COLORS_TOKEN: ThemeColorsToken = {
    primary: '',
    secondary: '',
    danger: '',
    warning: '',
};

const COLORS_TOKEN_DARK: ThemeColorsToken = {
    primary: '',
    secondary: '',
    danger: '',
    warning: '',
};

export const DEFAULT_PROVIDER_VALUE: ThemeProviderValue = {
    mode: 'light',
    button: BUTTON_THEMES,
    contentSize: CONTENT_SIZE,
    colorsTokens: {
        light: COLORS_TOKEN,
        dark: COLORS_TOKEN_DARK,
    },
};

export const ThemeContext = React.createContext<ThemeContextValue>({
    ...DEFAULT_PROVIDER_VALUE,
    colorsToken: DEFAULT_PROVIDER_VALUE.colorsTokens[DEFAULT_PROVIDER_VALUE.mode],
});
