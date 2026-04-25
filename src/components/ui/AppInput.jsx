import { TextField } from '@mui/material'

export default function AppInput({ sx = {}, ...props }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '18px',
          height: 58,
          backgroundColor: '#fff',
        },
        ...sx,
      }}
      {...props}
    />
  )
}