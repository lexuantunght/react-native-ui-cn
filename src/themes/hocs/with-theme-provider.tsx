import React from 'react';
import { ThemeProviderProps } from '../types';
import { ThemeProvider } from '../provider';

export function withThemeProvider<P extends {}>(Comp: React.ComponentType<P>) {
    const themed: React.ComponentType<P & ThemeProviderProps> = (props) => {
        const { theme, ...rest } = props;
        return React.createElement(ThemeProvider, { theme }, React.createElement(Comp, rest as P));
    };

    return themed;
}
