import { DefaultTheme } from 'styled-components'

const handleColor = (color: string, theme: DefaultTheme): string => {

  switch(color) {

    // ~~ Primary Colors
    case 'primary':
      return theme.colors.primary.color

    case 'primary-light':
      return theme.colors.primary.light

    case 'primary-dark':
      return theme.colors.primary.dark

    case 'primary-text':
      return theme.colors.primary.text

    // ~~ Secondary Colors
    case 'secondary':
      return theme.colors.secondary.color

    case 'secondary-light':
      return theme.colors.secondary.light

    case 'secondary-dark':
      return theme.colors.secondary.dark

    case 'secondary-text':
      return theme.colors.secondary.text

    // ~~ Success Colors
    case 'success':
      return theme.colors.success.color

    case 'success-light':
      return theme.colors.success.light

    case 'success-dark':
      return theme.colors.success.dark

    case 'success-text':
      return theme.colors.success.text

    // ~~ Info Colors
    case 'info':
      return theme.colors.info.color

    case 'info-light':
      return theme.colors.info.light

    case 'info-dark':
      return theme.colors.info.dark

    case 'info-text':
      return theme.colors.info.text

    // ~~ Warning Colors
    case 'warning':
      return theme.colors.warning.color

    case 'warning-light':
      return theme.colors.warning.light

    case 'warning-dark':
      return theme.colors.warning.dark

    case 'warning-text':
      return theme.colors.warning.text

    // ~~ Error Colors
    case 'error':
      return theme.colors.error.color

    case 'error-light':
      return theme.colors.error.light

    case 'error-dark':
      return theme.colors.error.dark

    case 'error-text':
      return theme.colors.error.text

    // ~~ Black Colors
    case 'black':
      return theme.colors.black.color

    case 'black-light':
      return theme.colors.black.color

    case 'black-dark':
      return theme.colors.black.color

    case 'black-text':
      return theme.colors.black.text

    // ~~ White Colors
    case 'white':
      return theme.colors.white.color

    case 'white-light':
      return theme.colors.white.color

    case 'white-dark':
      return theme.colors.white.color

    case 'white-text':
      return theme.colors.white.text

    // ~~ Background Colors
    case 'background':
      return theme.colors.background.color

    case 'background-light':
      return theme.colors.background.color

    case 'background-dark':
      return theme.colors.background.color

    case 'background-text':
      return theme.colors.background.color

    case undefined:
      return theme.colors.black.color
    
    default: 
      return color
  }
}

export default handleColor