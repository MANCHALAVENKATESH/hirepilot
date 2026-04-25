import { Card } from '@mui/material'

export default function AppCard({ children, sx = {}, ...props }) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: '28px',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 2px 8px rgba(16,24,40,0.03)',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  )
}