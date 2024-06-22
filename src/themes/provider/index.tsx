import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext, DEFAULT_THEME } from './context';
import { ThemeProviderProps } from '../types';
import UIThemesController from '../controller/ui-themes-controller';

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (props) => {
    const { theme = {} } = props;
    const colorSchemeName = useColorScheme();
    const value = React.useMemo(() => {
        const themeValue = Object.assign(DEFAULT_THEME, { mode: colorSchemeName }, theme);
        UIThemesController.setTheme(themeValue);
        return themeValue;
    }, [theme, colorSchemeName]);

    return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
