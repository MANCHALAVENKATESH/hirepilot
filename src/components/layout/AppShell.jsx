import { Box } from '@mui/material'
import Sidebar from './Sidebar'

export default function AppShell({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F5F7FB', p: 2 }}>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
        <Sidebar />
        <Box sx={{ flex: 1, pt: 2, pr: 1 }}>{children}</Box>
      </Box>
    </Box>
  )
}