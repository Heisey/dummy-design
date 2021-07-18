declare const utils: {
    handleColor: (color: string, theme: import("styled-components").DefaultTheme) => string;
    generateTheme: (config: import("styled-components").ThemeConfig) => import("styled-components").DefaultTheme;
};
export default utils;
