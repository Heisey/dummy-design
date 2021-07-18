import 'styled-components';

export interface ProjectTheme {

  name: string,

  font: {
    families: {
      primary: string
      secondary: string
    },
    weight: {
      light: string
      normal: string
      bold: string
    }
  },

  // ~~ Colors
  colors: {
    white: {
      name: string
      text: string
      color: string
    }

    black: {
      name: string
      text: string
      color: string
    }

    background: {
      name: string
      color: string
    }

    primary: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }

    secondary: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }

    success: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }

    info: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }

    error: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }

    warning: {
      name: string
      text: string
      color: string
      light: string
      dark: string
    }
  },


  layout: {
    padding: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
    }

    margin: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
    }

    breakpoints: {
      Desktop: string
      Laptop: string
      tablet: string
      mobile: string
    }
  }

  // ~~ Layout
  animations: {
    transitions: {
      slow: string
      standard: string
      fast: string
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ProjectTheme { }
}
