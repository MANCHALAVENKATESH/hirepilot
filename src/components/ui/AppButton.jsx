import { Button } from '@mui/material'

export default function AppButton({
  children,
  variant = 'contained',
  sx = {},
  ...props
}) {
  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: '18px',
        textTransform: 'none',
        fontWeight: 600,
        minHeight: 52,
        px: 3,
        boxShadow: 'none',
        ...(variant === 'outlined' && {
          borderColor: '#D8DDEA',
          color: '#182033',
          backgroundColor: '#fff',
          '&:hover': {
            borderColor: '#C9D1E4',
            backgroundColor: '#fafbff',
          },
        }),
        ...(variant === 'contained' && {
          backgroundColor: '#5B4CF0',
          '&:hover': {
            backgroundColor: '#4D3FE0',
          },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}