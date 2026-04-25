import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import AppInput from './AppInput'

export default function SearchBar({ placeholder = 'Search...', sx = {}, ...props }) {
  return (
    <AppInput
      placeholder={placeholder}
      sx={sx}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#98A2B3' }} />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}