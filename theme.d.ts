import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    
    name: string,

    font: {
      colors: {
        dark: string
        light: string
        success: string
        warning: string
        danger: string
        info: string
      },
      size: {
        
        title: string
        subtitle: string
        body: string
      }
    },
    
    colors: {
      baseColor: string
      baseColorRGB: string

      // ~~ Prime Colors
      white: string
      whiteRGB: string

      black: string
      blackRGB: string

      // ~~ Primary Colors
      primaryColorLight: string
      primaryColorLightRGB: string

      primaryColor: string
      primaryColorRGB: string

      primaryColorDark: string
      primaryColorDarkRGB: string

      // ~~ Secondary Colors
      secondaryColorLight: string
      secondaryColorLightRGB: string

      secondaryColor: string
      secondaryColorRGB: string

      secondaryColorDark: string
      secondaryColorDarkRGB: string

      // ~~ Success Colors
      successColorLight: string
      successColorLightRGB: string

      successColor: string
      successColorRGB: string

      successColorDark: string
      successColorDarkRGB: string

      // ~~ Info Colors
      infoColorLight: string
      infoColorLightRGB: string

      infoColor: string
      infoColorRGB: string

      infoColorDark: string
      infoColorDarkRGB: string

      // ~~ Error Colors
      errorColorLight: string
      errorColorLightRGB: string

      errorColor: string
      errorColorRGB: string

      errorColorDark: string
      errorColorDarkRGB: string

      // ~~ Warning Colors
      warningColorLight: string
      warningColorLightRGB: string

      warningColor: string
      warningColorRGb: string

      warningColorDark: string
      warningColorDarkRGB: string
    },
    padding: {
      large: string
      reg: string
      small: string
    }
    transition: {
      slow: string
      standard: string
      fast: string
    }
  }
}