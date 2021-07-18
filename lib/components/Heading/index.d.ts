import React from 'react';
import { DefaultTheme } from 'styled-components';
export interface HeadingProps {
    text?: string;
    color?: string;
    hierarchy?: 'primary' | 'secondary' | 'tertiary';
    theme: DefaultTheme;
}
declare const _default: React.ForwardRefExoticComponent<{
    hierarchy?: "primary" | "secondary" | "tertiary" | undefined;
    color?: string | undefined;
    text?: string | undefined;
    children?: React.ReactNode;
} & {
    theme?: DefaultTheme | undefined;
}>;
export default _default;
