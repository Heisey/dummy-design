/// <reference types="react" />
declare const lib: {
    Heading: import("react").ForwardRefExoticComponent<{
        text?: string | undefined;
        color?: string | undefined;
        hierarchy?: "primary" | "secondary" | "tertiary" | undefined;
        children?: import("react").ReactNode;
    } & {
        theme?: import("styled-components").DefaultTheme | undefined;
    }>;
};
export default lib;
