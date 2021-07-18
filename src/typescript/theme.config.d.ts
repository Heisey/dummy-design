import 'styled-components';

declare module 'styled-components' {
  export interface ThemeConfig {
    name: string
    font: string[]
    colors: {
      white: {
        name?: string
        text?: string
        color: string
      }

      black: {
        name?: string
        text?: string
        color: string
      }

      background: {
        name?: string
        color: string
      }

      primary: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }

      secondary: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }

      success: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }

      info: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }

      error: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }

      warning: {
        name?: string
        text?: string
        color: string
        light?: string
        dark?: string
      }
    }
  }
}