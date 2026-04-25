import { Box, Typography } from '@mui/material'

export default function PageHeader({ title, subtitle, right }) {
  return (
    <Box
      sx={{
        mb: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 3,
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <Typography variant="h1">Dashboard</Typography>
        <Typography
          sx={{
            mt: 1.5,
            fontSize: '1.1rem',
            color: 'text.secondary',
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>{right}</Box>
    </Box>
  )
}