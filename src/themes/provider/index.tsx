import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext, DEFAULT_PROVIDER_VALUE } from './context';
import { ThemeContextValue, ThemeProviderProps } from '../types';
import UIThemesController from '../controller/ui-themes-controller';

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (props) => {
    const { theme = {} } = props;
    const colorSchemeName = useColorScheme();
    const value = React.useMemo(() => {
        const mode = theme.mode || colorSchemeName || DEFAULT_PROVIDER_VALUE.mode;
        const themeProviderValue = Object.assign(DEFAULT_PROVIDER_VALUE, { mode }, theme);
        UIThemesController.setMode(themeProviderValue.mode);
        const themeContextValue: ThemeContextValue = {
            ...themeProviderValue,
            colorsToken: themeProviderValue.colorsTokens[themeProviderValue.mode],
        };
        return themeContextValue;
    }, [colorSchemeName]);

    return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
