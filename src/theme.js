import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2'
        },
        secondary: {
          main: '#dc004e'
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5'
        },
        text: {
          primary: '#000000',
          secondary: '#424242'
        }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9'
        },
        secondary: {
          main: '#f48fb1'
        },
        background: {
          default: '#121212',
          paper: '#1d1d1d'
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0bec5'
        }
      }
    }
  }
})
