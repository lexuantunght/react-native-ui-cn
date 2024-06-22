import type { BUTTON_THEMES } from './themes/button.theme';

export type ThemeMode = 'dark' | 'light';

export interface ThemeColorsToken {
    primary: string;
}

export type ThemeContentSize = Record<'sm' | 'md' | 'lg', { content: number }>;

export interface ThemeProviderValue {
    mode: ThemeMode;
    button: typeof BUTTON_THEMES;
    contentSize: ThemeContentSize;
    colorsToken: Record<ThemeMode, ThemeColorsToken>;
}

export interface ThemeProviderProps {
    theme?: Partial<ThemeProviderValue>;
}
