import { Chip } from '@mui/material'

const styles = {
  default: { bg: '#F1F5F9', color: '#64748B' },
  brand: { bg: '#E9EEFF', color: '#5B4CF0' },
  success: { bg: '#DDF8E7', color: '#16A34A' },
  warning: { bg: '#FFF1BF', color: '#D97706' },
  danger: { bg: '#FDE2E2', color: '#EF4444' },
  purple: { bg: '#E8EAFF', color: '#5B4CF0' },
}

export default function AppBadge({ label, color = 'default', sx = {} }) {
  const style = styles[color] || styles.default

  return (
    <Chip
      label={label}
      sx={{
        height: 32,
        backgroundColor: style.bg,
        color: style.color,
        borderRadius: '999px',
        fontWeight: 700,
        fontSize: '0.95rem',
        '& .MuiChip-label': {
          px: 2,
        },
        ...sx,
      }}
    />
  )
}