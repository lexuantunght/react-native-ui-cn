import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import IconDict from 'static/dist-icon/icon.map.json';

export interface IconProps {
    width?: number;
    height?: number;
    size?: number;
    name: keyof typeof IconDict;
    color?: string;
    style?: StyleProp<ViewStyle>;
}

export const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { width, height, name, color, style, size = 24 } = props;

    return (
        <SvgXml
            width={width || size}
            height={height || size}
            xml={IconDict[name]}
            fill={color}
            color={color}
            fontSize={size}
            style={style}
        />
    );
};
