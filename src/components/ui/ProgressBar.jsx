import { Box } from '@mui/material'

export default function ProgressBar({
  value = 50,
  fill = '#5B4CF0',
  track = '#E8EEFF',
  sx = {},
}) {
  return (
    <Box
      sx={{
        width: 156,
        height: 12,
        borderRadius: 999,
        backgroundColor: track,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        sx={{
          width: `${value}%`,
          height: '100%',
          borderRadius: 999,
          backgroundColor: fill,
        }}
      />
    </Box>
  )
}