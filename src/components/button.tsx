import React from 'react';
import { Pressable, PressableProps, View, ActivityIndicator, Text } from 'react-native';
import { mergeStyle } from '../utils/merge-style';
import { ThemeContext } from '../themes/provider/context';

export interface ButtonProps extends PressableProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'danger' | 'warning';
    loading?: boolean;
    text?: string;
}

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<View>) => {
    const { size = 'md', variant = 'primary', style, loading, text, ...rest } = props;
    const { button, contentSize, colorsToken } = React.useContext(ThemeContext);

    return (
        <Pressable
            {...rest}
            ref={ref}
            style={mergeStyle(
                style,
                { backgroundColor: colorsToken[variant] },
                button[size],
                props.disabled && button.disabled
            )}>
            {loading ? (
                <ActivityIndicator size={contentSize[size].content} />
            ) : (
                <>
                    {text ? (
                        <Text style={{ fontSize: contentSize[size].content }}>{text}</Text>
                    ) : null}
                    {props.children}
                </>
            )}
        </Pressable>
    );
});
