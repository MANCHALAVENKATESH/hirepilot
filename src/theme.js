import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5B4CF0',
    },
    secondary: {
      main: '#EEF2FF',
    },
    success: {
      main: '#22C55E',
    },
    warning: {
      main: '#F59E0B',
    },
    error: {
      main: '#EF4444',
    },
    background: {
      default: '#F5F7FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#182033',
      secondary: '#7B8598',
    },
    divider: '#E7EBF3',
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '3.2rem',
      fontWeight: 700,
      lineHeight: 1.1,
      color: '#182033',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#182033',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#182033',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.95rem',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F5F7FB',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          border: '1px solid #E7EBF3',
          boxShadow: '0 2px 8px rgba(16,24,40,0.03)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 18,
          fontWeight: 600,
          boxShadow: 'none',
        },
        contained: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          backgroundColor: '#fff',
        },
      },
    },
  },
})

export default theme