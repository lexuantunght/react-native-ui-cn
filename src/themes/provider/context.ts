import React from 'react';
import { ThemeProviderValue } from '../types';
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

const COLORS_TOKEN = {
    primary: '',
};

export const DEFAULT_THEME: ThemeProviderValue = {
    mode: 'light',
    button: BUTTON_THEMES,
    contentSize: CONTENT_SIZE,
    colorsToken: {
        dark: COLORS_TOKEN,
        light: COLORS_TOKEN,
    },
};

export const ThemeContext = React.createContext<ThemeProviderValue>(DEFAULT_THEME);
