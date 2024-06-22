import type { ColorValue } from 'react-native';
import type { BUTTON_THEMES } from './themes/button.theme';

export type ThemeMode = 'dark' | 'light';

export interface ThemeColorsToken {
    primary: ColorValue;
    secondary: ColorValue;
    danger: ColorValue;
    warning: ColorValue;
}

export type ThemeContentSize = Record<'sm' | 'md' | 'lg', { content: number }>;

export interface ThemeProviderValue {
    mode: ThemeMode;
    button: typeof BUTTON_THEMES;
    contentSize: ThemeContentSize;
    colorsTokens: Record<ThemeMode, ThemeColorsToken>;
}

export interface ThemeContextValue {
    mode: ThemeMode;
    button: typeof BUTTON_THEMES;
    contentSize: ThemeContentSize;
    colorsToken: ThemeColorsToken;
}

export interface ThemeProviderProps {
    theme?: Partial<ThemeProviderValue>;
}
