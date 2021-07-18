import { DefaultTheme, ThemeConfig } from 'styled-components'

const generateTheme = (config: ThemeConfig) => {
  return {
    name: config.name,
    font: {
      families: {
        primary: config.font[0]
      },
      weight: {
        light: '300',
        normal: '500',
        bold: '700'
      }
    },
      
    // ~~ Colors
    colors: {
      white: {
        name: config.colors.white.name ? config.colors.white.name : 'White',
        text: config.colors.white.text ? config.colors.white.text : config.colors.white.color,
        color: config.colors.white.color
      },
  
      black: {
        name: config.colors.black.name ? config.colors.black.name : 'Black',
        text: config.colors.black.text ? config.colors.black.text : config.colors.black.color,
        color: config.colors.black.color
      },

      background: {
        name: config.colors.background.name ? config.colors.background.name : 'Background',
        color: config.colors.background.color
      },
  
      primary: {
        name: config.colors.primary.name ? config.colors.primary.name : 'Primary',
        text: config.colors.primary.text ? config.colors.primary.text : config.colors.primary.color,
        color: config.colors.primary.color,
        light: config.colors.primary.light ? config.colors.primary.light : config.colors.primary.color,
        dark: config.colors.primary.dark ? config.colors.primary.dark : config.colors.primary.color
      },
  
      secondary: {
        name: config.colors.primary.name ? config.colors.primary.name : 'Secondary',
        text: config.colors.secondary.text ? config.colors.secondary.text : config.colors.secondary.color,
        color: config.colors.secondary.color,
        light: config.colors.secondary.light ? config.colors.secondary.light : config.colors.secondary.color,
        dark: config.colors.secondary.dark ? config.colors.secondary.dark : config.colors.secondary.color
      },
  
      success: {
        name: config.colors.success.name ? config.colors.success.name : 'Success',
        text: config.colors.success.text ? config.colors.success.text : config.colors.success.color,
        color: config.colors.success.color,
        light: config.colors.success.light ? config.colors.success.light : config.colors.success.color,
        dark: config.colors.success.dark ? config.colors.success.dark : config.colors.success.color
      },
  
      info: {
        name: config.colors.success.name ? config.colors.info.name : 'Info',
        text: config.colors.info.text ? config.colors.info.text : config.colors.info.color,
        color: config.colors.info.color,
        light: config.colors.info.light ? config.colors.info.light : config.colors.info.color,
        dark: config.colors.info.dark ? config.colors.info.dark : config.colors.info.color
      },
  
      error: {
        name: config.colors.error.name ? config.colors.error.name : 'Error',
        text: config.colors.error.text ? config.colors.error.text : config.colors.error.color,
        color: config.colors.error.color,
        light: config.colors.error.light ? config.colors.error.light : config.colors.error.color,
        dark: config.colors.error.dark ? config.colors.error.dark : config.colors.error.color
      },
  
      warning: {
        name: config.colors.warning.name ? config.colors.warning.name : 'Warning',
        text: config.colors.warning.text ? config.colors.warning.text : config.colors.warning.color,
        color: config.colors.warning.color,
        light: config.colors.warning.light ? config.colors.warning.light : config.colors.warning.color,
        dark: config.colors.warning.dark ? config.colors.warning.dark : config.colors.warning.color
      }
    },

    layout: {
      padding: {
        xs: '6px',
        s: '12px',
        m: '26px',
        l: '42px',
        xl: '84px'
      },
    
      margin: {
        xs: '6px',
        s: '12px',
        m: '26px',
        l: '42px',
        xl: '84px'
      },
    
      breakpoints: {
        Desktop: '1920px',
        Laptop: '1366px',
        tablet: '850px',
        mobile: '450px'
      }
    },
    animations: {
      transitions: {
        slow: '0.8s',
        standard: '0.5s',
        fast: '0.3s',
      }
    }
  } as DefaultTheme
}

export default generateTheme